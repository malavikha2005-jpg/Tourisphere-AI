export const fetchRecommendations = async (
  country,
  budget,
  climate,
  interest
) => {

  try {

    const response = await fetch(
      `http://127.0.0.1:8000/recommendations?country=${country}&budget=${budget}&climate=${climate}&interest=${interest}`
    );

    return await response.json();

  } catch (error) {

    console.error(
      "Recommendation API Error",
      error
    );

    return [];
  }

};