/* src/services/documentService.js */
import { unstable_noStore as noStore } from "next/cache";

const API_BASE_URL = process.env.API_BASE_URL;

/**
 * Fetches documents with pagination.
 * @param {number} pageSize - The number of documents per page.
 * @returns {Promise<Array>} A promise that resolves to an array of documents.
 */
export async function getDocuments(pageSize = 4) {
  noStore();
  try {
    const response = await fetch(
      `${API_BASE_URL}/documents?pageSize=${pageSize}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch documents");
    }
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
}
