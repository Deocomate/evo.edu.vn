/* ===== src/views/Training/Detail/components/OtherTrainingsSection.jsx ===== */
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from "@/components/ui/carousel";

const stripHtml = (html) => {
    if (typeof window !== 'undefined') {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }
    return html.replace(/<[^>]+>/g, '');
};

function OtherTrainingsSection({ trainings }) {
    if (!trainings || trainings.length === 0) {
        return null;
    }

    return (
        <section className="py-16 sm:py-24 border-t bg-gray-50/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-sky-500 inline-block">
                    Các Khóa Học Khác
                </h2>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {trainings.map((training) => (
                            <CarouselItem key={training.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Link href={`/training/${training.slug}`} className="block h-full group">
                                        <Card className="flex flex-col h-full overflow-hidden p-0 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                                            {/* Thay đổi tỷ lệ ảnh thành 4/3 (landscape) để cân đối hơn */}
                                            <AspectRatio ratio={4 / 3} className="overflow-hidden">
                                                <Image
                                                    src={training.thumbnail}
                                                    alt={training.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />
                                            </AspectRatio>

                                            <CardContent className="p-0 flex flex-col flex-grow">
                                                <div className="px-4 pb-1 text-sm text-gray-500 border-b border-gray-100">
                                                    <span className="font-semibold tracking-wider">Độ tuổi: </span>
                                                    <span>{training.age}</span>
                                                </div>
                                                <div className="px-4 pt-3 pb-4 flex flex-col flex-grow">
                                                    <h4 className="text-base font-bold text-gray-900 line-clamp-2 flex-grow group-hover:text-sky-600 transition-colors leading-snug mb-2">
                                                        {training.title}
                                                    </h4>
                                                    <p className="text-sm text-gray-600 line-clamp-4 leading-relaxed">
                                                        {stripHtml(training.description)}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                    <CarouselDots />
                </Carousel>
            </div>
        </section>
    );
}

export default OtherTrainingsSection;