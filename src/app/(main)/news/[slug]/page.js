/* ===== src\app\(main)\news\[slug]\page.js ===== */
// src/app/(main)/news/[slug]/page.js
import { notFound } from 'next/navigation';
import { getNews, getNewsBySlug } from '@/services/newsService';
import NewsDetailPage from '@/pages_jsx/News/Detail/NewsDetailPage';
import { GenericDetailSkeleton } from '@/components/ui/GenericDetailSkeleton'; // SỬA: Import đúng component

export async function generateMetadata({ params }) {
    const awaitedParams = await params;
    const { slug } = awaitedParams;

    const article = await getNewsBySlug(slug);

    if (!article) {
        return {
            title: "Không tìm thấy bài viết"
        };
    }
    return {
        title: `${article.title} - A&U English`,
        // SỬA: Lấy description từ content nếu có
        description: article.content ? article.content.replace(/<[^>]+>/g, '').substring(0, 160) : "Chi tiết bài viết tại A&U English",
    };
}

export default async function NewsDetail({ params }) {
    const awaitedParams = await params;
    const { slug } = awaitedParams;

    const article = await getNewsBySlug(slug);
    
    if (!article) {
        notFound();
    }
    
    const recentNewsData = await getNews(1, 6);
    const recentArticles = recentNewsData.data
        .filter(p => p.slug !== slug)
        .slice(0, 5);

    return <NewsDetailPage article={article} recentArticles={recentArticles} />;
}