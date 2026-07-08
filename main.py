from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.mongodb import db
from app.routes.search import router as search_router
from app.routes.recommendations import router as recommendations_router
from app.routes.favorites import router as favorites_router
from app.routes.history import router as history_router
from app.routes.destinations import (
    router as destinations_router
)

app = FastAPI(
    title="Travel Recommendation API"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    destinations_router
)
app.include_router(search_router)
app.include_router(recommendations_router)
app.include_router(favorites_router)
app.include_router(history_router)
@app.get("/")
def root():
    return {
        "message":
        "Travel Recommendation Backend Running"
    }