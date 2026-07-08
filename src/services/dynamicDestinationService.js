export const fetchDynamicDestinations = async (country) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/dynamic-destinations?country=${country}`
    );

    return await response.json();
  } catch (error) {
    console.error("Dynamic destination error:", error);
    return [];
  }
};