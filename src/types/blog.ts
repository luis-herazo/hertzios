export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
  image: string | null;
  created_at?: string;
}
