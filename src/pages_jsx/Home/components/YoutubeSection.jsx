/* ===== Home/components/YoutubeSection.jsx ===== */
"use client";

import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getYoutubeEmbedUrl } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";

function YoutubeSection({ links = [] }) {
    const embedLinks = links.slice(0, 4).map(getYoutubeEmbedUrl).filter(Boolean);

    if (embedLinks.length === 0) {
        return null;
    }

    const YoutubeVideo = ({ url, index }) => (
        <div className="rounded-lg overflow-hidden shadow-lg">
            <AspectRatio ratio={16 / 9}>
                <iframe
                    src={url}
                    title={`Evo Education YouTube Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </AspectRatio>
        </div>
    );

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-base font-semibold leading-7 text-sky-500">EVO TRÊN YOUTUBE</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Video Nổi Bật
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Khám phá thêm về các dự án của học viên, các sự kiện công nghệ và chia sẻ kiến thức tại Evo Education qua những video chân thực nhất.
                    </p>
                </div>

                <div className="hidden sm:block max-w-6xl mx-auto p-2 pt-4 md:p-6 bg-white rounded-xl shadow-md border">
                    <div className="grid grid-cols-2 gap-4">
                        {embedLinks.map((url, index) => (
                            <YoutubeVideo key={index} url={url} index={index} />
                        ))}
                    </div>
                </div>

                <div className="sm:hidden">
                    <Carousel opts={{ loop: true }} className="w-full max-w-lg mx-auto">
                        <CarouselContent>
                            {embedLinks.map((url, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <YoutubeVideo url={url} index={index} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselDots />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default YoutubeSection;
