/* src/app/(main)/knowledge/[slug]/page.js */
import { createDetailPage } from "@/lib/pageFactory";
import { getNewsBySlug } from "@/services/newsService";
import NewsDetailPage from "@/pages_jsx/News/Detail/NewsDetailPage";

const { generateMetadata, Page } = createDetailPage({
  entityName: "Bài viết",
  getDataBySlug: getNewsBySlug,
  // SỬA: Thay đổi hàm này để luôn trả về mảng rỗng, sẽ không có "Bài viết mới"
  getOtherData: async (slug) => {
    return []; 
  },
  // Tái sử dụng component NewsDetailPage vì bạn muốn giao diện giống hệt
  DetailPageComponent: NewsDetailPage,
  generateTitle: (article) => `${article.title} - A&U English`,
  generateDescription: (article) =>
    article.excerpt || article.content?.replace(/<[^>]+>/g, "").substring(0, 160) || `Bài viết hữu ích dành cho phụ huynh tại A&U English.`,
});

export { generateMetadata };
export default Page;