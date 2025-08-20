/* src/lib/pageFactory.js */
// src/lib/pageFactory.js
import { notFound } from "next/navigation";

/**
 * Factory function để tạo trang chi tiết và metadata.
 * @param {object} config - Cấu hình cho trang.
 * @param {function(string): Promise<object|null>} config.getDataBySlug - Hàm để lấy dữ liệu chính dựa trên slug.
 * @param {function(object): Promise<Array>} [config.getOtherData] - (Tùy chọn) Hàm để lấy dữ liệu liên quan.
 * @param {React.ComponentType} config.DetailPageComponent - Component để render trang.
 * @param {function(object): string} config.generateTitle - Hàm tạo title cho metadata.
 * @param {function(object): string} config.generateDescription - Hàm tạo description cho metadata.
 * @param {string} config.entityName - Tên của thực thể (vd: "Khóa học").
 * @returns {{generateMetadata: function, Page: function}}
 */
export function createDetailPage({
  getDataBySlug,
  getOtherData,
  DetailPageComponent,
  generateTitle,
  generateDescription,
  entityName,
}) {
  // 1. Sản xuất ra hàm generateMetadata
  const generateMetadata = async ({ params }) => {
    const { slug } = await params;
    const data = await getDataBySlug(slug);

    if (!data) {
      return { title: `Không tìm thấy ${entityName}` };
    }

    return {
      title: generateTitle(data),
      description: generateDescription(data),
    };
  };

  // 2. Sản xuất ra Page Component
  const Page = async ({ params }) => {
    const { slug } = await params;

    // Dùng Promise.all để tải song song nếu có thể
    const [data, otherData] = await Promise.all([
      getDataBySlug(slug),
      getOtherData ? getOtherData(slug) : Promise.resolve([]),
    ]);

    if (!data) {
      notFound();
    }
    
    // CHỈNH SỬA: Đổi tên props để phù hợp với component NewsDetailPage và TeacherDetailPage
    const componentProps = {
        article: data, // Cho News, Knowledge
        teacher: data, // Cho Teacher
        course: data, // Cho Training
        data: data, // Prop chung
        recentArticles: otherData, // Cho News, Knowledge
        otherTeachers: otherData, // Cho Teacher
        otherCourses: otherData, // Cho Training
        otherData: otherData, // Prop chung
    };


    // Truyền dữ liệu vào component với props nhất quán
    return <DetailPageComponent {...componentProps} />;
  };

  return { generateMetadata, Page };
}