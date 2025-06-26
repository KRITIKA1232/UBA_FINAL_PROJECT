import { API_BASE_URL } from "../utils/config.ts";

export default async function getFonts() {
  try {
    const url = `${API_BASE_URL}/font`;
    console.log(`Fetching fonts`, url);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("fetching data");
    const result = await response.json();
    return { status: response.status, message: result };
  } catch (e) {
    return { status: 500, message: (e as Error).message };
  }
}