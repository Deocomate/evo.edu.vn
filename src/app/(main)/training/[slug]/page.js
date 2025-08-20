// src/app/(main)/training/[slug]/page.js
import { createDetailPage } from "@/lib/pageFactory";
import { getTrainingBySlug, getOtherTrainings } from "@/services/trainingService";
import TrainingDetailPage from "@/pages_jsx/Training/Detail/TrainingDetailPage";

const { generateMetadata, Page } = createDetailPage({
  entityName: "Khóa học",
  getDataBySlug: getTrainingBySlug,
  getOtherData: getOtherTrainings,
  DetailPageComponent: TrainingDetailPage,
  generateTitle: (course) => `${course.title} - A&U Bắc Ninh`,
  generateDescription: (course) => 
    course.description?.replace(/<[^>]+>/g, '').substring(0, 160) || `Chi tiết khóa học ${course.title} tại A&U English.`,
});

export { generateMetadata };
export default Page;