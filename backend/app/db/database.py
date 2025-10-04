from pymongo import MongoClient
from dotenv import load_dotenv
from fastapi import FastAPI
import os
load_dotenv()
database_url = os.getenv("DATABASE_URL")
database_name = os.getenv("DATABASE_NAME")


app = FastAPI()


@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(database_url)
    app.database = app.mongodb_client[database_name]
    print("Connected to the MongoDB database!")


@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()
