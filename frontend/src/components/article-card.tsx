import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles";
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/article/${article.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full bg-card border-border">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={article.thumbnail || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {article.publishedDate}
            </span>
          </div>
          <h2 className="text-xl font-serif font-bold mb-3 text-foreground leading-tight text-balance">
            {article.title}
          </h2>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
          <p className="text-sm font-medium text-foreground">
            By {article.author}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
