import { transformID } from "./../../../lib/database/index";
import { query } from "$lib/database";
import { error } from "@sveltejs/kit";
import { ObjectId } from "mongodb";
import type { BlogPost } from "$lib/types";

export const load = async ({ locals }) => {
  const session = await locals.auth();

  if (!session || !session.user || session.user.type !== "admin") {
    error(403, "Forbidden");
  }
  const data = await query<{ _id: ObjectId; title: string }>("blog", {}, { title: 1, _id: 1 });

  return {
    posts: data.map((item) => transformID(item))
  };
};
