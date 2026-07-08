from fastapi import APIRouter
from app.database.mongodb import db

router = APIRouter()

@router.post("/favorites")
def add_favorite(destination: dict):

    db.favorites.insert_one(destination)

    return {
        "message":
        "Favorite added successfully"
    }