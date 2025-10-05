import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("DATABASE_URL")
DATABASE_NAME = os.getenv("DATABASE_NAME")


if not MONGO_URI or not DATABASE_NAME:
    raise ValueError(
        "DATABASE_URL or DATABASE_NAME not set in environment variables")
