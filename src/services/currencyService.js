const API_URL =
  "https://open.er-api.com/v6/latest/INR";

export const fetchExchangeRates =
  async () => {
    try {
      const response = await fetch(API_URL);

      const data = await response.json();

      return {
        INR: 1,
        USD: data.rates.USD,
        EUR: data.rates.EUR,
        GBP: data.rates.GBP,
        JPY: data.rates.JPY,
      };
    } catch (error) {
      console.error(
        "Currency API Error:",
        error
      );

      return {
        INR: 1,
        USD: 0.012,
        EUR: 0.011,
        GBP: 0.0095,
        JPY: 1.8,
      };
    }
  };