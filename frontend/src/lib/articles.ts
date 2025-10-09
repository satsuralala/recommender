import axios from "axios";
export interface Article {
  _id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  link: string;
  category: string;
  published_at: Date;
}

// export function getArticleById(id: string): Article | undefined {
//   return articles.find((article) => article.id === id);
// }
const API_BASE = process.env.NEXT_PUBLIC_API_URL;
export async function getAllArticles() {
  const response = await axios.get(`${API_BASE}/articles`);
  return response.data;
}
export async function getArticle(id: string) {
  const response = await axios.get(`${API_BASE}/articles/${id}`);
  return response.data;
}
