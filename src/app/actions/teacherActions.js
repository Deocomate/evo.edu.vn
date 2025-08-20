"use server";

import { getTeachers } from "@/services/teacherService";

export async function loadMoreTeachers(page, pageSize) {
  try {
    const teacherData = await getTeachers({ page, pageSize });
    return teacherData;
  } catch (error) {
    console.error("Server Action error in loadMoreTeachers:", error);
    return { error: "Failed to load more teachers." };
  }
}
