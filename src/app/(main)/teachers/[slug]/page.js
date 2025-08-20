// src/app/(main)/teachers/[slug]/page.js
import { createDetailPage } from "@/lib/pageFactory";
import { getTeacherBySlug, getOtherTeachers } from "@/services/teacherService";
import TeacherDetailPage from "@/pages_jsx/Teachers/Detail/TeacherDetailPage";

const { generateMetadata, Page } = createDetailPage({
  entityName: "Giáo viên",
  getDataBySlug: getTeacherBySlug,
  getOtherData: async (slug) => {
    // getOtherTeachers cần teacher ID, nên phải lấy teacher trước
    const currentTeacher = await getTeacherBySlug(slug);
    if (!currentTeacher) return [];
    return getOtherTeachers(currentTeacher.id, 5);
  },
  DetailPageComponent: TeacherDetailPage,
  generateTitle: (teacher) => `${teacher.full_name} - A&U English`,
  generateDescription: (teacher) =>
    teacher.description?.replace(/<[^>]+>/g, "").substring(0, 160) ||
    `Profile of ${teacher.full_name}, an instructor at A&U English.`,
});

export { generateMetadata };
export default Page;
