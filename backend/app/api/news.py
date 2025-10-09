from fastapi import APIRouter, HTTPException
from backend.app.db.init_db import news_collection
from app.schemas.news import NewsSchema, NewsItem
from bson import ObjectId
from typing import List
import random

router = APIRouter()


@router.get("/news", response_model=NewsSchema)
async def get_news(page: int = 1, limit: int = 10):
    try:
        all_news = await news_collection.find({}).to_list()

        return NewsSchema(
            news=all_news
        )
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to fetch news: {str(e)}")


@router.get("/news/{news_id}", response_model=NewsItem)
async def get_news_by_id(news_id: str):
    try:
        if not ObjectId.is_valid(news_id):
            raise HTTPException(
                status_code=400, detail="Invalid news ID format")

        news_item = await news_collection.find_one({"_id": ObjectId(news_id)})
        if not news_item:
            raise HTTPException(status_code=404, detail="News item not found")

        news_item["_id"] = str(news_item["_id"])
        return NewsItem(**news_item)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to fetch news item: {str(e)}")
