/* src/services/parentsCornerService.js */
import { unstable_noStore as noStore } from "next/cache";

const API_BASE_URL = process.env.API_BASE_URL;

/**
 * Fetches testimonials with pagination.
 * @param {number} pageSize - The number of items per page.
 * @returns {Promise<Array>} A promise that resolves to an array of testimonials.
 */
export async function getTestimonials(pageSize = 6) {
  noStore();
  try {
    const response = await fetch(
      `${API_BASE_URL}/parents-corner?pageSize=${pageSize}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch testimonials");
    }
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

/**
 * Fetches a single testimonial by its slug.
 * @param {string} slug - The slug of the testimonial.
 * @returns {Promise<object|null>} A promise that resolves to the testimonial object or null if not found.
 */
export async function getTestimonialBySlug(slug) {
  noStore();
  try {
    const response = await fetch(`${API_BASE_URL}/parents-corner/${slug}`);
    if (!response.ok) return null;
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Error fetching testimonial by slug ${slug}:`, error);
    return null;
  }
}
