export interface BlogPost {
  timestamp: Date;
  title: string;
  content: string;
  published: boolean;
  author: string;
  tags: string[];
  _id: string;
}
