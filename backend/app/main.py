from fastapi import FastAPI
from app.db.session import startup_db_client
from backend.app.api.v1 import news

app = FastAPI(title="News API")


@app.on_event("startup")
def startup_event():
    startup_db_client()


app.include_router(news.router, prefix="/news", tags=["news"])
