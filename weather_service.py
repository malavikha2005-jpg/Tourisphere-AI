import requests

API_KEY = "79e6fe3dbebdf4dc428f44c6566dfdbe"


def get_weather(lat, lon):

    try:

        url = (
            "https://api.openweathermap.org/data/2.5/weather"
            f"?lat={lat}"
            f"&lon={lon}"
            f"&appid={API_KEY}"
            "&units=metric"
        )

        response = requests.get(url)

        data = response.json()

        return {
            "temperature": data["main"]["temp"],
            "humidity": data["main"]["humidity"],
            "condition": data["weather"][0]["main"],
            "wind_speed": data["wind"]["speed"]
        }

    except Exception as e:

        print("Weather Error:", e)

        return {
            "temperature": None,
            "humidity": None,
            "condition": "Unknown",
            "wind_speed": None
        }