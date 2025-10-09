from beanie import Document
from pydantic import Field
from typing import Optional
from datetime import datetime


class News(Document):
    title: str
    content: str
    image: Optional[str]
    author: Optional[str]
    link: str
    category: str
    published_at: Optional[datetime]

    class Settings:
        name = "news"
