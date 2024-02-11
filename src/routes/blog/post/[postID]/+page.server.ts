import { error } from "@sveltejs/kit";

import { query } from "$lib/database";
import { ObjectId } from "mongodb";

export const load = async ({ params }) => {
  if (!params.postID || params.postID.length !== 24) {
    error(404, { message: "blog post not found :(" });
  }

  const data = await query("blog", { _id: new ObjectId(params.postID) });

  if (data.length <= 0) {
    error(404, { message: "blog post not found :(" });
  }

  return {
    post: data[0]
  };
};
