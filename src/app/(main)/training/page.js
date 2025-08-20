import TrainingPage from "@/pages_jsx/Training/TrainingPage";
// THÊM: Import service
import { getTrainings } from "@/services/trainingService";

export default async function Training() {
  // THÊM: Lấy 2 khóa học đầu tiên bằng SSR
  const initialTrainingData = await getTrainings(2);
  return <TrainingPage initialTrainingData={initialTrainingData} />;
}