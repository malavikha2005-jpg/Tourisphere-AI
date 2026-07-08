import requests

PEXELS_API_KEY = "zehQhgJXn82porPhxA0WnPe5IIjZ8grNHd2QlBOYyLnIV3CvveDOBN97"


def get_place_image(place_name):
    try:
        headers = {
            "Authorization": PEXELS_API_KEY
        }

        url = (
            "https://api.pexels.com/v1/search"
            f"?query={place_name}"
            "&per_page=1"
        )

        response = requests.get(
            url,
            headers=headers,
            timeout=5
        )

        if response.status_code != 200:
            print("Pexels API Error:", response.status_code)
            return "https://images.unsplash.com/photo-1506744038136-46273834b3fb"

        data = response.json()

        if (
            "photos" in data
            and len(data["photos"]) > 0
        ):
            return data["photos"][0]["src"]["large"]

        return "https://images.unsplash.com/photo-1506744038136-46273834b3fb"

    except Exception as e:
        print("Image error:", e)
        return "https://images.unsplash.com/photo-1506744038136-46273834b3fb"