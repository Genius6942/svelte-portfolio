import { transformID } from "./../../../../lib/database/index";
import { query } from "$lib/database";
import { error } from "@sveltejs/kit";
import { ObjectId } from "mongodb";
import type { BlogPost } from "$lib/types";

export const load = async ({ params, locals }) => {
  const session = await locals.auth();

  if (!session || !session.user || session.user.type !== "admin") {
    error(403, "Forbidden");
  }

  if (!params.postID || params.postID.length !== 24) {
    error(404, { message: "blog post not found :(" });
  }

  const data = await query<BlogPost>("blog", { _id: new ObjectId(params.postID) });

  if (data.length <= 0) {
    error(404, { message: "blog post not found :(" });
  }

  return {
    post: transformID(data[0])
  };
};
