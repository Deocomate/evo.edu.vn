import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Calendar, Eye } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

// Cập nhật map màu cho các danh mục liên quan đến lập trình
const categoryColorMap = {
    'tin-cong-nghe': 'bg-sky-500 text-white',
    'su-kien-workshop': 'bg-blue-500 text-white',
    'chia-se-kien-thuc': 'bg-green-500 text-white',
    'thong-bao-evo': 'bg-yellow-500 text-black',
    'lich-khai-giang': 'bg-indigo-500 text-white',
    'uu-dai-hoc-phi': 'bg-pink-500 text-white',
    'lap-trinh-python': 'bg-teal-500 text-white',
    'cam-nhan-hoc-vien': 'bg-rose-500 text-white',
    'du-an-hoc-vien': 'bg-purple-500 text-white',
};

const fallbackColors = [
    'bg-slate-500 text-white', 'bg-cyan-500 text-white', 'bg-lime-500 text-black',
];

const getCategoryStyle = (slug) => {
    if (!slug || typeof slug !== 'string' || slug.length === 0) {
        return fallbackColors[0];
    }
    if (categoryColorMap[slug]) {
        return categoryColorMap[slug];
    }
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        hash = slug.charCodeAt(i) + ((hash << 5) - hash);
    }
    return fallbackColors[Math.abs(hash % fallbackColors.length)];
};


function RecentPostsSection({ articles }) {
    if (!articles || articles.length === 0) {
        return null;
    }

    const featuredArticle = articles[0];
    const otherArticles = articles.slice(1, 5);
    const badgeClass = getCategoryStyle(featuredArticle.category_slug);
    const formattedDate = format(new Date(featuredArticle.created_at), 'dd/MM/yyyy');

    return (
        <section className="py-16 sm:py-24 border-t bg-gray-50/50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-sky-500 inline-block">
                    Bài Viết Mới Nhất
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-12">
                    <div className="flex flex-col">
                        <Link href={`/news/${featuredArticle.slug}`}>
                            <div className="relative rounded-lg overflow-hidden shadow-md mb-4 group">
                                <AspectRatio ratio={16 / 9}>
                                    <Image
                                        src={featuredArticle.thumbnail}
                                        alt={featuredArticle.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    {featuredArticle.category_name && (
                                        <div className={cn(
                                            "absolute bottom-4 left-4 text-xs font-semibold px-3 py-1 rounded-sm uppercase",
                                            badgeClass
                                        )}>
                                            {featuredArticle.category_name}
                                        </div>
                                    )}
                                </AspectRatio>
                            </div>
                        </Link>
                        <h3 className="text-2xl font-bold leading-tight text-gray-800 hover:text-sky-600 transition-colors">
                            <Link href={`/news/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
                        </h3>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mt-2 mb-3">
                            <span className="flex items-center gap-1.5">BY <span className="font-medium text-sky-500 uppercase">{featuredArticle.author || 'EVO ADMIN'}</span></span>
                            <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {formattedDate}</span>
                            <span className="flex items-center gap-1.5"><Eye className="w-3 h-3" /> {featuredArticle.view}</span>
                        </div>
                        {featuredArticle.excerpt && (
                            <p className="mt-2 text-base text-gray-600 leading-relaxed line-clamp-3">
                                {featuredArticle.excerpt}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col space-y-6">
                        {otherArticles.map(article => (
                            <Link key={article.id} href={`/news/${article.slug}`} className="group flex items-center gap-4">
                                <div className="flex-shrink-0 w-32 h-20 rounded-md overflow-hidden shadow-sm">
                                    <Image
                                        src={article.thumbnail}
                                        alt={article.title}
                                        width={128}
                                        height={80}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-base font-semibold leading-tight text-gray-800 group-hover:text-sky-600 transition-colors line-clamp-2">
                                        {article.title}
                                    </h4>
                                    {article.excerpt && (
                                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                    )}
                                    <p className="text-xs text-gray-500 mt-2 flex items-center gap-1.5">
                                        <Calendar className="w-3 h-3" />
                                        {format(new Date(article.created_at), 'dd/MM/yyyy')}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RecentPostsSection;
