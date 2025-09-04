/* ===== src/views/Training/Detail/components/CourseReviewVideo.jsx ===== */
"use client";

import React, { useRef, useEffect, useState } from 'react';
import { getYoutubeEmbedUrl } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
function CourseReviewVideo({ youtubeUrl }) {
    const videoRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    const embedUrl = getYoutubeEmbedUrl(youtubeUrl);
    if (!embedUrl) {
        return null;
    }

    const videoSrc = isInView ? `${embedUrl}?autoplay=1&mute=1&playsinline=1` : embedUrl;
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.5
            }
        );

        const currentRef = videoRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    return (
        <section ref={videoRef} className="py-24 bg-white">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-base font-semibold leading-7 text-sky-500">Cảm Nhận Học Viên</h2>
                        <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-800">
                            Video Review Khóa Học
                        </p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                        <AspectRatio ratio={16 / 9} className="bg-gray-200">
                            {!videoLoaded && <Skeleton className="w-full h-full" />}
                            <iframe
                                src={videoSrc}
                                title="YouTube video review"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className={`w-full h-full transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                                onLoad={() => setVideoLoaded(true)}
                            ></iframe>
                        </AspectRatio>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CourseReviewVideo;