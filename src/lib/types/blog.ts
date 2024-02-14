export interface FullBlogPost {
  timestamp: Date;
  title: string;
  content: string;
  published: boolean;
  author: string;
  tags: string[];
  _id: string;
	comments: Comment[];
}

export interface Comment {
	timestamp: Date;
	user: {
		name: string;
		id: string;
		icon: string;
	},
	content: string;
	comments: Comment[];
}

export type BlogPost<T extends keyof FullBlogPost = keyof FullBlogPost> = Pick<FullBlogPost, T>;