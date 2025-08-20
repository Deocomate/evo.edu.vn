import { unstable_noStore as noStore } from "next/cache";

const API_BASE_URL = process.env.API_BASE_URL;

export async function getTrainings(pageSize = 2, page = 1) {
  noStore();
  try {
    const response = await fetch(
      `${API_BASE_URL}/training?pageSize=${pageSize}&page=${page}`
    );
    if (!response.ok) throw new Error("Failed to fetch trainings");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching trainings:", error);
    return { data: [], totalPages: 1, currentPage: 1 };
  }
}

export async function getAllTrainings() {
  noStore();
  try {
    const response = await fetch(`${API_BASE_URL}/training`);
    if (!response.ok) throw new Error("Failed to fetch all trainings");
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error("Error fetching all trainings:", error);
    return [];
  }
}

export async function getTrainingBySlug(slug) {
  noStore();
  try {
    const response = await fetch(`${API_BASE_URL}/training/${slug}`);
    if (!response.ok) return null;
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Error fetching training by slug ${slug}:`, error);
    return null;
  }
}

export async function getOtherTrainings(excludeSlug, pageSize = 5) {
  noStore();
  try {
    const response = await fetch(
      `${API_BASE_URL}/training?pageSize=${pageSize + 1}`
    );
    if (!response.ok) throw new Error("Failed to fetch other trainings");
    const result = await response.json();
    const trainings = result.data || [];
    return trainings
      .filter((training) => training.slug !== excludeSlug)
      .slice(0, pageSize);
  } catch (error) {
    console.error("Error fetching other trainings:", error);
    return [];
  }
}
