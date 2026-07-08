import requests
from app.services.image_service import get_place_image

API_KEY = "f97873ce9f1e454aafef503c45801d28"


def get_places(country):

    try:

        # -----------------------------
        # STEP 1 : Get Country Coordinates
        # -----------------------------
        geo_url = (
            "https://api.geoapify.com/v1/geocode/search"
            f"?text={country}"
            f"&apiKey={API_KEY}"
        )

        geo_response = requests.get(
            geo_url,
            timeout=10
        )

        geo_data = geo_response.json()

        if (
            "features" not in geo_data
            or len(geo_data["features"]) == 0
        ):
            return []

        properties = geo_data["features"][0]["properties"]

        place_id = properties["place_id"]

        # -----------------------------
        # STEP 2 : Fetch Tourist Places
        # -----------------------------
        places_url = (
            "https://api.geoapify.com/v2/places"
            "?categories=tourism.sights"
            f"&filter=place:{place_id}"
            "&limit=15"
            f"&apiKey={API_KEY}"
        )

        places_response = requests.get(
            places_url,
            timeout=10
        )

        places_data = places_response.json()

        places = []

        if "features" in places_data:

            for item in places_data["features"]:

                p = item["properties"]

                place_name = p.get("name", "Unknown")

                image_url = get_place_image(
                    f"{place_name} tourist attraction {country}"
                )

                destination = {

                    "name": place_name,

                    "city": p.get("city", "Unknown"),

                    "country": p.get("country", country),

                    "state": p.get("state", ""),

                    "latitude": p.get("lat"),

                    "longitude": p.get("lon"),

                    "image": image_url,

                    # Temporary values
                    "temperature": 25,

                    "humidity": 70,

                    "climate": "Clear",

                    "rating": 4.5,

                    "budget": "Medium",

                    "popularity": 90,

                    "averageCost": 1000,

                    "interests": [
                        "Culture",
                        "Nature"
                    ],

                    "bestMonths": [
                        "October",
                        "November",
                        "December"
                    ],

                    "suitableFor": [
                        "Solo",
                        "Couple",
                        "Family"
                    ]
                }

                places.append(destination)

        print(f"Dynamic Places Found: {len(places)}")

        return places

    except Exception as e:

        print("Destination Service Error:", e)

        return []