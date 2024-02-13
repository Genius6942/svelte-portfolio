import { query, transformID } from "$lib/database";
import type { BlogPost } from "$lib/types";

export const load = async () => {
  const recent = await query<BlogPost<"title" | "timestamp" | "tags" | "author">>({
    collection: "blog",
    sort: { timestamp: -1 },
    query: { published: true },
    projection: { title: 1, timestamp: 1, tags: 1, author: 1, _id: 1 }
  });

  return { recent: recent.map(transformID) };
};
