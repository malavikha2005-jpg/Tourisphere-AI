from datetime import datetime
from app.database.mongodb import travel_history_collection


def save_travel_history(destination):

    try:

        history = {

            "user_id": "guest",

            "destination": destination.get("name"),

            "country": destination.get("country"),

            "state": destination.get("state"),

            "city": destination.get("city"),

            "temperature": destination.get("temperature"),

            "weather": destination.get("climate"),

            "budget": destination.get("budget"),

            "rating": destination.get("rating"),

            "viewed_at": datetime.utcnow()

        }

        travel_history_collection.insert_one(history)

        print("Travel history saved.")

    except Exception as e:

        print("Travel History Error:", e)