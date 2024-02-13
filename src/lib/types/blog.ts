export interface FullBlogPost {
  timestamp: Date;
  title: string;
  content: string;
  published: boolean;
  author: string;
  tags: string[];
  _id: string;
}

export type BlogPost<T extends keyof FullBlogPost = keyof FullBlogPost> = Pick<FullBlogPost, T>;