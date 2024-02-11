import { query } from "$lib/database";

export const load = async () => {
  const allPosts = await query<{ tags: string[] }>("blog", {}, { tags: 1, _id: 0 });
  const tags = allPosts.map((post) => post.tags).flat();

  return { tags };
};
