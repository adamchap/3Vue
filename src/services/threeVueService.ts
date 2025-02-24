import { API_URL } from "../constants/constants.ts";

/**
 * Attempts to fetch product details for 3vue challenge
 */
export const fetch3vueData = async () => {
  try {
    const httpOptions = createHttpOptions("GET");

    const healthProductResponse = await fetch(API_URL, httpOptions);

    // check the response status and throw error
    if (!healthProductResponse.ok) {
      throw new Error(`HTTP error! Status: ${healthProductResponse.status}`);
    }
    const healthProductData = await healthProductResponse.json();
    return healthProductData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

/**
 * Reusable function to get httpOptions
 */
function createHttpOptions(method = "GET", headers = {}) {
  const defaultHeaders = {
    "Content-Type": "application/json",
    ...headers,
  };

  return {
    method,
    headers: defaultHeaders,
  };
}
