//app/types/post.tsx
export interface Post {
  id: string;
  title: string; // e.g. username or profile name
  description: string; // content of the post
  image: string; // avatar or profile image URL
  createdAt: string; // ISO timestamp
  category?: string; // optional tag (e.g., 'tech', 'lifestyle', etc.)
}
