"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LikeDislikeButtons() {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
      setDisliked(false);
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
    } else {
      setDisliked(true);
      setLiked(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        size="lg"
        onClick={handleLike}
        className={cn(
          "gap-2 transition-colors",
          liked &&
            "bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground"
        )}
      >
        <ThumbsUp className={cn("h-5 w-5", liked && "fill-current")} />
        <span className="font-medium">Like</span>
      </Button>
      <Button
        variant="outline"
        size="lg"
        onClick={handleDislike}
        className={cn(
          "gap-2 transition-colors",
          disliked &&
            "bg-destructive text-destructive-foreground border-destructive hover:bg-destructive/90 hover:text-destructive-foreground"
        )}
      >
        <ThumbsDown className={cn("h-5 w-5", disliked && "fill-current")} />
        <span className="font-medium">Dislike</span>
      </Button>
      {(liked || disliked) && (
        <span className="text-sm text-muted-foreground ml-2">
          Thank you for your feedback!
        </span>
      )}
    </div>
  );
}
