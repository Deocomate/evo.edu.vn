/* src/views/ParentsCorner/components/KeyResourcesSection.jsx */
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Download, Sparkles } from 'lucide-react';
import Link from 'next/link';

const resources = [
    { title: 'Cẩm Nang Công Nghệ', description: 'Kiến thức cần thiết giúp cha mẹ đồng hành cùng con trên con đường học lập trình.', icon: <BookOpen className="h-8 w-8 text-sky-500" />, href: '#' },
    { title: 'Tài Liệu Khóa Học', description: 'Tải về lộ trình học và các tài liệu bổ ích cho việc học tập của con.', icon: <Download className="h-8 w-8 text-blue-500" />, href: '#downloads' },
    { title: 'Dự Án Học Viên', description: 'Khám phá các sản phẩm sáng tạo do chính các học viên Evo thực hiện.', icon: <Sparkles className="h-8 w-8 text-green-500" />, href: '#' },
];

function KeyResourcesSection() {
    return (
        <section className="bg-white py-20 px-4 md:px-0">
            <div className="container mx-auto px-0 lg:px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource) => (
                        <Link key={resource.title} href={resource.href}>
                            <Card className="text-center h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <CardHeader className="flex flex-col items-center justify-center">
                                    {resource.icon}
                                    <CardTitle className="mt-4">{resource.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-500 font-medium">{resource.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default KeyResourcesSection;