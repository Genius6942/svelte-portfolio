import { insert } from "$lib/database";
import type { BlogPost } from "$lib/types";
import { error, redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
  const session = await locals.auth();
  if (!session || session.user.type !== "admin") {
    return error(403, "Forbidden");
  }

  const data: Omit<BlogPost, "_id"> = {
    title: "(Untitled Post)",
    content: "",
    published: false,
    timestamp: new Date()
  };

  const { insertedId } = await insert("blog", data);
  redirect(302, `/blog/edit/${insertedId}`);
};
