from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from app.schemas.news import News
from app.config import MONGO_URI, DATABASE_NAME


async def init_db():
    client = AsyncIOMotorClient(MONGO_URI)
    database = client[DATABASE_NAME]
    await init_beanie(database=database, document_models=[News])
