# app/routes/route.py
from bson import ObjectId
from fastapi import APIRouter, HTTPException
from app.schemas.news import News

router = APIRouter(prefix="/articles", tags=["News"])


@router.get("/", response_model=list[News])
async def get_all_news():
    news_list = await News.find_all().to_list()
    return news_list


@router.get("/{news_id}", response_model=News)
async def get_news(news_id: str):
    news = await News.find_one({"_id": ObjectId(news_id)})
    if not news:
        raise HTTPException(status_code=404, detail="News not found")
    return news
