/* ===== src/pages_jsx/Training/Detail/components/CourseGallery.jsx ===== */
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Eye } from 'lucide-react';

function CourseGallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    if (!images || images.length === 0) {
        return null;
    }

    const handleOpenChange = (isOpen) => {
        if (!isOpen) {
            setSelectedImage(null);
        }
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-sky-500">Thư Viện Ảnh</h2>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-800">
                        Hình Ảnh Khóa Học
                    </p>
                </div>

                <Dialog onOpenChange={handleOpenChange}>
                    <Carousel
                        opts={{ align: "start", loop: images.length > 3 }}
                        className="w-full max-w-6xl mx-auto"
                    >
                        <CarouselContent className="-ml-4">
                            {images.map((src, index) => (
                                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                    <DialogTrigger asChild onClick={() => setSelectedImage(src)}>
                                        <div className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg">
                                            <AspectRatio ratio={4 / 3}>
                                                <Image
                                                    src={src}
                                                    alt={`Hình ảnh khóa học ${index + 1}`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <Eye className="h-10 w-10 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                                                </div>
                                            </AspectRatio>
                                        </div>
                                    </DialogTrigger>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                        <CarouselDots />
                    </Carousel>

                    {selectedImage && (
                        <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
                            <DialogHeader className="sr-only">
                                <DialogTitle>Xem ảnh chi tiết</DialogTitle>
                                <DialogDescription>Phóng to hình ảnh.</DialogDescription>
                            </DialogHeader>
                            <Image
                                src={selectedImage}
                                alt="Ảnh được chọn"
                                width={1200}
                                height={800}
                                className="object-contain w-full h-auto max-h-[90vh] rounded-lg"
                            />
                        </DialogContent>
                    )}
                </Dialog>
            </div>
        </section>
    );
}

export default CourseGallery;