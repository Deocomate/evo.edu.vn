/* ===== src\app\(main)\news\page.js ===== */
import NewsPage from "@/pages_jsx/News/NewsPage";
import { getNews, getNewsCategories } from "@/services/newsService";

export const metadata = {
  title: "Tin tức & Sự kiện - A & U English",
  description: "Cập nhật những tin tức, sự kiện và thông báo mới nhất từ Hệ thống Anh ngữ A&U.",
};

export default async function News({ searchParams }) {
  // Await searchParams before using its properties
  const params = await searchParams;
  const page = params?.page;
  const search = params?.search;
  const pageSize = params?.pageSize;

  const [newsData, categories] = await Promise.all([
    getNews({
      page,
      search,
      pageSize
    }),
    getNewsCategories()
  ]);

  return <NewsPage newsData={newsData} categories={categories} />;
}