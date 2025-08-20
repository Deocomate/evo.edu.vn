/* ===== src/pages_jsx/Training/components/ProgramsList.jsx ===== */
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Server, Terminal, Target, Lightbulb, Bot, Gamepad2, BrainCircuit, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { loadMoreTrainings } from '@/app/actions/trainingActions';
import { useTraining } from '@/context/TrainingProvider';
import { getYoutubeEmbedUrl } from '@/lib/utils';

const iconMap = {
    'evo-kid': <Code className="h-6 w-6" />,
    'evo-junior': <Server className="h-6 w-6" />,
    'evo-adult': <Terminal className="h-6 w-6" />,
};
const genericIcons = [
    <Bot className="h-6 w-6" />,
    <Gamepad2 className="h-6 w-6" />,
    <BrainCircuit className="h-6 w-6" />,
    <Target className="h-6 w-6" />,
    <Lightbulb className="h-6 w-6" />
];
const getIconForProgram = (slug) => {
    const key = Object.keys(iconMap).find(k => slug.includes(k));
    if (key) {
        return iconMap[key];
    }
    const randomIndex = Math.floor(Math.random() * genericIcons.length);
    return genericIcons[randomIndex];
};
function ProgramCard({ program, reverse = false }) {
    const youtubeEmbedUrl = program.youtube_review_link ? getYoutubeEmbedUrl(program.youtube_review_link) : null;
    return (
        <div id={program.slug} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={cn(reverse && "md:order-last")}>
                {youtubeEmbedUrl ? (
                    <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src={youtubeEmbedUrl}
                            title={`Review: ${program.title}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                ) : (
                    <Link href={`/training/${program.slug}`}>
                        <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer">
                            <Image
                                src={program.thumbnail}
                                alt={program.title}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </Link>
                )}
            </div>
            <div className="prose prose-lg max-w-none">
                <Badge variant="secondary" className="mb-2 text-base">{program.age}</Badge>
                <h3 className="flex items-center gap-3 mt-2 text-3xl font-extrabold tracking-tight text-gray-900">
                    <span className="text-sky-500">{getIconForProgram(program.slug)}</span>
                    {program.title}
                </h3>
                <div
                    className="mt-4 leading-relaxed text-gray-700 font-medium line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: program.description }}
                />
                <div className="mt-6 flex justify-center md:justify-start">
                    <Button asChild variant="ghost" className="text-white bg-sky-500 hover:bg-sky-600 text-base ">
                        <Link href={`/training/${program.slug}`}>
                            Xem chi tiết <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

const PROGRAMS_PER_PAGE = 2;

function ProgramsList({ initialTrainingData }) {
    const {
        programs, setPrograms,
        currentPage, setCurrentPage,
        totalPages, setTotalPages,
        isInitialized, setIsInitialized
    } = useTraining();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isInitialized) {
            setPrograms(initialTrainingData.data || []);
            setCurrentPage(initialTrainingData.currentPage || 1);
            setTotalPages(initialTrainingData.totalPages || 1);
            setIsInitialized(true);
        }
    }, [initialTrainingData, isInitialized, setPrograms, setCurrentPage, setTotalPages, setIsInitialized]);
    const handleLoadMore = async () => {
        if (currentPage >= totalPages) return;
        setIsLoading(true);
        const nextPage = currentPage + 1;

        try {
            const newData = await loadMoreTrainings(nextPage, PROGRAMS_PER_PAGE);
            if (newData.error) {
                throw new Error(newData.error);
            }

            setPrograms(prev => [...prev, ...newData.data]);
            setCurrentPage(nextPage);
        } catch (error) {
            console.error("Failed to load more programs:", error);
        } finally {
            setIsLoading(false);
        }
    };
    if (!isInitialized) {
        return null;
    }

    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-sky-500">Lộ Trình Học Tập</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Chương Trình Đào Tạo
                    </p>
                </div>
                <div className="space-y-24">
                    {programs.map((program, index) => (
                        <ProgramCard key={program.id} program={program} reverse={index % 2 !== 0} />
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
                            {isLoading ?
                                (
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

export default ProgramsList;