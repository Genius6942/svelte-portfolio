import { error } from "@sveltejs/kit";

import { query } from "$lib/database";
import type { BlogPost } from "$lib/types";
import { ObjectId } from "mongodb";

import { transformID } from "./../../../lib/database/index";

export const load = async ({ locals }) => {
  const session = await locals.auth();

  if (!session || !session.user || session.user.type !== "admin") {
    error(403, "Forbidden");
  }
  const data = await query<{ _id: ObjectId; title: string }>({
    collection: "blog",
    projection: { title: 1, _id: 1 }
  });

  return {
    posts: data.map((item) => transformID(item))
  };
};
