/* ===== Home/components/GallerySection.jsx ===== */
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

const INITIAL_IMAGES_COUNT = 9;
const IMAGES_TO_LOAD_MORE = 5;

function GallerySection({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [visibleCount, setVisibleCount] = useState(INITIAL_IMAGES_COUNT);

    const handleOpenChange = (isOpen) => {
        if (!isOpen) {
            setSelectedImage(null);
        }
    };

    const handleLoadMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + IMAGES_TO_LOAD_MORE, images.length));
    };

    const visibleImages = images.slice(0, visibleCount);
    
    const imageObjects = visibleImages.map((src, index) => ({
        src,
        alt: `Gallery image ${index + 1}`,
        className: index === 0 ? 'md:col-span-2 md:row-span-2' : ''
    }));

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-sky-500">Thư Viện Ảnh</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Khoảnh Khắc Đáng Nhớ Tại Evo Education
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        Cùng nhìn lại những giờ học lập trình sôi nổi, những dự án sáng tạo và những nụ cười rạng rỡ của học viên tại Evo Education.
                    </p>
                </div>

                <Dialog onOpenChange={handleOpenChange}>
                    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4 md:grid-flow-row-dense">
                        {imageObjects.map((image, index) => (
                            <div key={index} className={`group relative cursor-pointer overflow-hidden rounded-xl shadow-lg ${image.className}`}>
                                <DialogTrigger asChild onClick={() => setSelectedImage(image.src)}>
                                    <div>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Camera className="h-10 w-10 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </DialogTrigger>
                            </div>
                        ))}
                    </div>

                    {selectedImage && (
                        <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
                            <DialogHeader className="sr-only">
                                <DialogTitle>Xem ảnh chi tiết</DialogTitle>
                                <DialogDescription>
                                    Phóng to hình ảnh.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="relative w-full h-auto">
                                <Image
                                    src={selectedImage}
                                    alt="Ảnh được chọn"
                                    width={1200}
                                    height={800}
                                    className="object-contain w-full h-full rounded-lg"
                                />
                            </div>
                        </DialogContent>
                    )}
                </Dialog>

                {visibleCount < images.length && (
                    <div className="text-center mt-12">
                        <Button
                            size="lg"
                            onClick={handleLoadMore}
                            className="bg-sky-500 hover:bg-sky-600 text-white text-lg font-semibold px-10 py-6 cursor-pointer"
                        >
                            Xem Thêm Ảnh
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default GallerySection;
