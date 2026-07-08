export const fetchDestinations = async () => {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/destinations"
    );

    return await response.json();

  } catch (error) {

    console.error("Destination API Error:", error);

    return [];
  }
};