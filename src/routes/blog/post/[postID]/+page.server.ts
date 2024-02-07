import { query } from "$lib/database";
import { error } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

export const load = async ({ params }) => {
  const data = await query("blog", { _id: new ObjectId(params.postID) });

  if (data.length <= 0) {
    error(404, { message: "blog post not found :(" });
  }

  return {
    post: data[0],
  };
};
