import TeachersPage from "@/pages_jsx/Teachers/TeachersPage";
import { getTeachers } from "@/services/teacherService";

export const metadata = {
  title: "Đội ngũ giáo viên - A & U Bắc Ninh",
  description: "Gặp gỡ đội ngũ giáo viên bản xứ và Việt Nam tâm huyết, chuyên môn cao tại A&U Bắc Ninh. Chúng tôi cam kết chất lượng giảng dạy theo chuẩn quốc tế.",
};

export default async function Teachers() {
  const initialTeachersData = await getTeachers({ page: 1, pageSize: 3 });
  return <TeachersPage initialTeachersData={initialTeachersData} />;
}