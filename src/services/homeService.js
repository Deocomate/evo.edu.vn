// src/services/homeService.js
import { unstable_noStore as noStore } from "next/cache";

export async function getHomepageData() {
  // noStore() is used here to ensure fresh data on every request,
  // similar to getServerSideProps. For static data, you can remove it
  // or use the revalidate option in fetch.
  noStore();

  try {
    const response = await fetch(`${process.env.API_BASE_URL}/homepage`);

    if (!response.ok) {
      throw new Error("Failed to fetch homepage data");
    }

    const jsonResponse = await response.json();
    return jsonResponse.data;
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return null; // Return null on error to handle it gracefully in the page component.
  }
}
