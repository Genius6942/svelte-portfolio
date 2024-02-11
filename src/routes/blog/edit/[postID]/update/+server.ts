import { error, json } from "@sveltejs/kit";

import { remove, update } from "$lib/database";
import type { BlogPost } from "$lib/types";
import { ObjectId } from "mongodb";

import type { RequestHandler } from "./$types";

export const PUT: RequestHandler = async ({ url, request, params, locals }) => {
  // check authentication
  const session = await locals.auth();
  if (!session || session.user.type !== "admin") {
    return error(403, "Unauthorized");
  }

  const { postID } = params;
  if (!postID) {
    return error(400, "Invalid data");
  }

  const newData: Omit<BlogPost, "_id"> & { _id?: string } = await request.json();
  if (
    !newData ||
    typeof newData.content !== "string" ||
    !newData.timestamp ||
    !newData.title ||
    !("published" in newData) ||
    !newData.author ||
    !Array.isArray(newData.tags)
  ) {
    return error(400, "Invalid data");
  }

  if ("_id" in newData) {
    delete newData._id;
  }

  try {
    await update("blog", { _id: new ObjectId(postID) }, { $set: newData });
  } catch (e) {
    console.error(e);
    return error(500, "Database error (perhaps the post doesn't exist?)");
  }

  return json({ success: true });
};

export const DELETE = async ({ params, locals }) => {
  const session = await locals.auth();
  if (!session || session.user.type !== "admin") {
    return error(403, "Unauthorized");
  }

  const { postID } = params;
  if (!postID) {
    return error(400, "Invalid data");
  }

  try {
    await remove("blog", { _id: new ObjectId(postID) });
  } catch (e) {
    console.error(e);
    return error(500, "Database error (perhaps the post doesn't exist?)");
  }

  return json({ success: true });
};
