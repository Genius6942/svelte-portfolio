import { transformID } from "./../../../../lib/database/index";
import { query } from "$lib/database";
import { error } from "@sveltejs/kit";
import { ObjectId } from "mongodb";
import type { BlogPost } from "$lib/types";

export const load = async ({ params }) => {
  if (!params.postID || params.postID.length !== 24) {
    error(404, { message: "blog post not found :(" });
  }

  const data = await query<BlogPost>("blog", { _id: new ObjectId(params.postID) });
	console.log(data);

  if (data.length <= 0) {
    error(404, { message: "blog post not found :(" });
  }

  return {
    post: data[0]
  };
};
