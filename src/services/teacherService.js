import { unstable_noStore as noStore } from "next/cache";

const API_BASE_URL = process.env.API_BASE_URL;

export async function getTeachers({ page = 1, pageSize = 3 } = {}) {
  noStore();
  try {
    const response = await fetch(
      `${API_BASE_URL}/teachers?page=${page}&pageSize=${pageSize}`
    );
    if (!response.ok) throw new Error("Failed to fetch teachers");
    return await response.json();
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return { data: [], totalPages: 1, currentPage: 1 };
  }
}

export async function getFeaturedTeachers(pageSize = 6) {
  const result = await getTeachers({ pageSize });
  return result.data || [];
}

export async function getTeacherBySlug(slug) {
  noStore();
  try {
    const response = await fetch(`${API_BASE_URL}/teachers/${slug}`);
    if (!response.ok) return null;
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Error fetching teacher by slug ${slug}:`, error);
    return null;
  }
}

export async function getOtherTeachers(excludeId, pageSize = 5) {
  noStore();
  try {
    const result = await getTeachers({ pageSize: pageSize + 1 });
    const teachers = result.data || [];
    return teachers
      .filter((teacher) => teacher.id !== excludeId)
      .slice(0, pageSize);
  } catch (error) {
    console.error("Error fetching other teachers:", error);
    return [];
  }
}