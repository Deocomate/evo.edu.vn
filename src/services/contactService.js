import { unstable_noStore as noStore } from "next/cache";

const API_BASE_URL = process.env.API_BASE_URL;

export async function getContactInfo() {
  noStore();
  try {
    const response = await fetch(`${API_BASE_URL}/contact`);

    if (!response.ok) {
      throw new Error("Failed to fetch contact information");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching contact info:", error);
    return null;
  }
}
