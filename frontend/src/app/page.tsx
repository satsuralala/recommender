"use client";
import { ArticleCard } from "@/components/article-card";
import { Header } from "@/components/header";
import { Article, getAllArticles } from "@/lib/articles";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getAllArticles().then(setArticles).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 text-balance">
            Сүүлийн үеийн түүхүүд
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Технологи, амьдралын хэв маяг, инноваци болон бусад олон зүйлийг
            хамарсан ойлголттой нийтлэлүүдийг олж мэдээрэй.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Түүхийн сонин. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </footer>
    </div>
  );
}
