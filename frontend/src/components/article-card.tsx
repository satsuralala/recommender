import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles";
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/article/${article._id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full bg-card border-border">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            quality={100}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent>
          <div className="flex items-center gap-3 mb-3"></div>
          <h2 className="text-sm  font-bold mb-3 text-foreground leading-tight text-balance">
            {article.title}
          </h2>
          {/* <span className="text-xs text-muted-foreground">
              {string(article.published_at)}
            </span> */}
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
            {article?.category}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
