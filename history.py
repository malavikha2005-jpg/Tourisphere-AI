from fastapi import APIRouter
from app.services.history_service import save_travel_history

router = APIRouter()


@router.post("/travel-history")
def add_history(destination: dict):

    save_travel_history(destination)

    return {
        "message": "Travel history saved successfully."
    }
    