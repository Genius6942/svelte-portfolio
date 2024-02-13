import { query } from "$lib/database";

export const load = async () => {
  const allPosts = await query<{ tags: string[]; title: string; timestamp: Date }>({
    collection: "blog",
    projection: { tags: 1, title: 1, timestamp: 1, _id: 0 },
		query: { published: true }
  });
  const tags = [...new Set(allPosts.map((post) => post.tags).flat())];

  const recentPosts = allPosts
    .map((item) => ({ ...item, timestamp: new Date(item.timestamp) }))
    .sort((a, b) => b.timestamp.getUTCMilliseconds() - a.timestamp.getUTCMilliseconds());

  return { tags };
};
