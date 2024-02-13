import { error } from "@sveltejs/kit";

import { query } from "$lib/database";
import type { BlogPost } from "$lib/types";
import { ObjectId } from "mongodb";

import { transformID } from "./../../../../lib/database/index";

export const load = async ({ params, locals }) => {
  const session = await locals.auth();

  if (!session || !session.user || session.user.type !== "admin") {
    error(403, "Forbidden");
  }

  if (!params.postID || params.postID.length !== 24) {
    error(404, { message: "blog post not found :(" });
  }

  const data = await query<BlogPost>({
    collection: "blog",
    query: { _id: new ObjectId(params.postID) }
  });

  if (data.length <= 0) {
    error(404, { message: "blog post not found :(" });
  }

  const allPosts = await query<{ tags: string[] }>({ collection: "blog", query: { tags: 1 } });
  const tags = allPosts.map((post) => post.tags).flat();

  return {
    post: transformID(data[0]),
    tags: [...tags]
  };
};
