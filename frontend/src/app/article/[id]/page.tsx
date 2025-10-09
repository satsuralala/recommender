"use client";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Article, getArticle } from "@/lib/articles";
import { Header } from "@/components/header";
import { LikeDislikeButtons } from "@/components/like-dislike-buttons";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ArticlePage() {
  const [article, setArticle] = useState<Article>();
  const params = useParams();
  useEffect(() => {
    getArticle(String(params?.id)).then(setArticle).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-8 -ml-4 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Нийтлэл рүү буцах
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-serif font-bold text-foreground mt-4 mb-6 text-balance leading-tight">
              {article?.title}
            </h1>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {article?.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Зохиогч: {article?.author}
                </span>
                <span>•</span>
                {/* <span>{article?.published_at}</span> */}
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/9] mb-12 rounded-lg overflow-hidden">
            <Image
              src={article?.image || "/placeholder.svg"}
              alt={String(article?._id)}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            {article?.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-foreground leading-relaxed mb-6 text-pretty"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Та энэ нийтлэлийн талаар юу бодож байна?
            </h3>
            <LikeDislikeButtons />
          </div>
        </article>
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
