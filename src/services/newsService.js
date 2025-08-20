/* ===== src\services\newsService.js ===== */
import { unstable_noStore as noStore } from "next/cache";

const API_BASE_URL = process.env.API_BASE_URL;

/**
 * Fetches paginated news articles with optional search.
 * @param {object} params - The query parameters.
 * @param {string|Promise<string>} params.page - The page number.
 * @param {string|Promise<string>} params.search - The search term.
 * @param {string|Promise<string>} params.pageSize - The number of items per page.
 * @returns {Promise<object>} A promise that resolves to the paginated news data.
 */
export async function getNews({
  page = "1",
  search = "",
  pageSize = "10",
} = {}) {
  noStore();
  try {
    // Ensure all parameters are resolved in case they are promises
    const resolvedPage = String((await page) || "1");
    const resolvedSearch = String((await search) || "");
    const resolvedPageSize = String((await pageSize) || "10");

    const query = new URLSearchParams({
      page: resolvedPage,
      pageSize: resolvedPageSize,
    });

    if (resolvedSearch) {
      query.append("search", resolvedSearch);
    }

    const response = await fetch(`${API_BASE_URL}/news?${query.toString()}`);
    if (!response.ok) throw new Error("Failed to fetch news");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching news:", error);
    return { data: [], totalPages: 1, currentPage: 1, totalElements: 0 };
  }
}

/**
 * Fetches a single news article by its slug.
 * @param {string} slug - The slug of the news article.
 * @returns {Promise<object|null>} A promise that resolves to the article object or null if not found.
 */
export async function getNewsBySlug(slug) {
  noStore();
  try {
    const response = await fetch(`${API_BASE_URL}/news/${slug}`);
    if (!response.ok) return null;
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Error fetching news by slug ${slug}:`, error);
    return null;
  }
}

/**
 * Fetches all news categories.
 * @returns {Promise<Array>} A promise that resolves to an array of categories.
 */
export async function getNewsCategories() {
  noStore();
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error("Error fetching news categories:", error);
    return [];
  }
}

/**
 * Fetches news articles for a specific category slug with optional search.
 * @param {string} slug - The slug of the category.
 * @param {object} params - The query parameters.
 * @param {string|Promise<string>} params.page - The page number.
 * @param {string|Promise<string>} params.search - The search term.
 * @param {string|Promise<string>} params.pageSize - The number of items per page.
 * @returns {Promise<object>} A promise that resolves to the paginated category news data.
 */
export async function getNewsByCategorySlug(
  slug,
  { page = "1", search = "", pageSize = "10" } = {}
) {
  noStore();
  try {
    // Ensure all parameters are resolved in case they are promises
    const resolvedPage = String((await page) || "1");
    const resolvedSearch = String((await search) || "");
    const resolvedPageSize = String((await pageSize) || "10");

    const query = new URLSearchParams({
      page: resolvedPage,
      pageSize: resolvedPageSize,
    });

    if (resolvedSearch) {
      query.append("search", resolvedSearch);
    }

    const response = await fetch(
      `${API_BASE_URL}/categories/${slug}/news?${query.toString()}`
    );
    if (!response.ok)
      throw new Error(`Failed to fetch news for category ${slug}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Error fetching news for category ${slug}:`, error);
    return {
      category: { name: "", slug: "" },
      data: [],
      totalPages: 1,
      currentPage: 1,
    };
  }

  /**
   * Fetches knowledge & experience articles.
   * @param {number} pageSize - The number of items to fetch.
   * @returns {Promise<Array>} A promise that resolves to an array of articles.
   */
}

/**
 * Fetches knowledge & experience articles.
 * @param {number} pageSize - The number of items to fetch.
 * @returns {Promise<Array>} A promise that resolves to an array of articles.
 */
export async function getKnowledgeNews(pageSize = 6) {
  noStore();
  try {
    const response = await fetch(
      `${API_BASE_URL}/knowledge-news?pageSize=${pageSize}`
    );
    if (!response.ok) throw new Error("Failed to fetch knowledge news");
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error("Error fetching knowledge news:", error);
    return [];
  }
}
