"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Facebook, Mail, Loader2 } from 'lucide-react';
import { useTeacher } from '@/context/TeacherProvider';
import { loadMoreTeachers } from '@/app/actions/teacherActions';
import { Button } from '@/components/ui/button';

const TEACHERS_PER_PAGE = 3;

const getInitials = (name) => {
    if (!name) return '';
    const names = name.split(' ');
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
};

function TeacherProfilesSection({ initialTeachersData }) {
    const router = useRouter();
    const {
        teachers, setTeachers,
        currentPage, setCurrentPage,
        totalPages, setTotalPages,
        isInitialized, setIsInitialized
    } = useTeacher();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isInitialized) {
            setTeachers(initialTeachersData.data || []);
            setCurrentPage(initialTeachersData.currentPage || 1);
            setTotalPages(initialTeachersData.totalPages || 1);
            setIsInitialized(true);
        }
    }, [initialTeachersData, isInitialized, setTeachers, setCurrentPage, setTotalPages, setIsInitialized]);

    const handleLoadMore = async () => {
        if (currentPage >= totalPages) return;
        setIsLoading(true);
        const nextPage = currentPage + 1;
        
        try {
            const newData = await loadMoreTeachers(nextPage, TEACHERS_PER_PAGE);
            if (newData.error) throw new Error(newData.error);

            setTeachers(prevTeachers => {
                const existingIds = new Set(prevTeachers.map(t => t.id));
                const uniqueNewTeachers = newData.data.filter(t => !existingIds.has(t.id));
                return [...prevTeachers, ...uniqueNewTeachers];
            });
            setCurrentPage(nextPage);

        } catch (error) {
            console.error("Failed to load more teachers:", error);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleCardClick = (slug) => {
        router.push(`/teachers/${slug}`);
    };

    const handleSocialClick = (e, url) => {
        e.stopPropagation();
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    if (!isInitialized) return null;

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-sky-500">Giảng Viên & Chuyên Gia</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Gặp Gỡ Đội Ngũ Evo Education
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        Những gương mặt tận tâm, những chuyên gia đầy nhiệt huyết đứng sau sự thành công của học viên.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teachers.map((teacher) => (
                        <Card
                            key={teacher.id}
                            onClick={() => handleCardClick(teacher.slug)}
                            className="flex flex-col text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full cursor-pointer"
                        >
                            <CardHeader className="items-center">
                                <Avatar className="w-32 h-32 mb-4 border-4 border-sky-200 mx-auto">
                                    <AvatarImage src={teacher.avatar} alt={`Chân dung ${teacher.full_name}`} />
                                    <AvatarFallback className="text-4xl bg-sky-100 text-sky-600">{getInitials(teacher.full_name)}</AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-2xl font-bold text-gray-900">{teacher.full_name}</CardTitle>
                                <CardDescription className="text-base text-sky-600 font-medium min-h-[3rem] flex items-center justify-center">
                                    {teacher.role}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow mt-4 text-left text-gray-600 w-full">
                                <ul className="list-disc list-inside space-y-1">
                                    {teacher.qualifications.map((q, i) => (
                                        <li key={i}>{q}</li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="justify-center gap-4 pt-4 mt-4 border-t border-gray-100">
                                <button
                                    onClick={(e) => handleSocialClick(e, teacher.facebook)}
                                    aria-label={`Facebook of ${teacher.full_name}`}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <Facebook className="h-5 w-5 text-gray-400" />
                                </button>
                                <button
                                    onClick={(e) => handleSocialClick(e, `mailto:${teacher.email}`)}
                                    aria-label={`Email ${teacher.full_name}`}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-20">
                    {currentPage < totalPages && (
                        <Button
                            size="lg"
                            onClick={handleLoadMore}
                            disabled={isLoading}
                            className="bg-sky-500 hover:bg-sky-600 text-white text-lg font-semibold px-10 py-6 cursor-pointer"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Đang tải...
                                </>
                            ) : (
                                "Xem thêm"
                            )}
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default TeacherProfilesSection;