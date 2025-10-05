from fastapi import FastAPI
from app.db.session import startup_db_client
from app.api import news

app = FastAPI(title="News API")


@app.on_event("startup")
def startup_event():
    startup_db_client()


app.include_router(news.router, prefix="/news", tags=["news"])
