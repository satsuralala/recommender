from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class NewsSchema(BaseModel):
    title: str
    content: str
    image: Optional[str] = None
    author: Optional[str] = None
    link: str
    category: str
    published_at: Optional[datetime] = None
