import React from 'react';
import { Calendar, User, Eye } from 'lucide-react';
import RecentPostsSection from '@/views/News/components/RecentPostsSection';
import { format } from 'date-fns';

function NewsDetailPage({ article = {}, recentArticles = [] }) {
    if (!article.id) {
        return (
            <main className="flex items-center justify-center h-screen">
                <p>Không tìm thấy bài viết hoặc đang tải...</p>
            </main>
        );
    }
    
    const formattedDate = format(new Date(article.created_at), 'dd/MM/yyyy');

    return (
        <main>
            <div className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto"> 
                        <header className="mb-8">
                            <p className="text-base font-semibold text-sky-600 uppercase">{article.category_name}</p>
                            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                                {article.title}
                            </h1>
                            <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mt-4 border-b pb-4">
                                <span className="flex items-center gap-1.5">
                                    <User className="w-4 h-4 text-sky-500" />
                                    BY <span className="font-semibold text-sky-500 uppercase">{article.author || 'EVO ADMIN'}</span>
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" /> {formattedDate}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Eye className="w-4 h-4" /> {article.view} Lượt xem
                                </span>
                            </div>
                        </header>

                        {article.excerpt && (
                            <p className="mt-8 text-lg italic text-gray-600 border-l-4 border-sky-400 pl-4 font-medium">
                                {article.excerpt}
                            </p>
                        )}

                        <div
                            className="prose prose-lg max-w-none prose-img:rounded-xl prose-h3:text-gray-800 mt-8 prose-p:font-medium prose-li:font-medium"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </div>
                </div>
            </div>

            <RecentPostsSection articles={recentArticles} />
        </main>
    );
}

export default NewsDetailPage;
