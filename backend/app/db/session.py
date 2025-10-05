from pymongo import MongoClient
from app.config import MONGO_URI, DATABASE_NAME

client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]

news_collection = db["news"]
feedback_collection = db["feedback"]
