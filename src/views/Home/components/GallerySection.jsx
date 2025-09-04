"use client";

import React, {useState} from 'react';
import Image from 'next/image';
import {
    Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger
} from '@/components/ui/dialog';
import {Button} from '@/components/ui/button';
import {Camera} from 'lucide-react';

const MAX_VISIBLE_IMAGES = 5;

function GallerySection({images}) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showAllImages, setShowAllImages] = useState(false);

    // Filter out any images with null src
    const validImages = images.filter(src => src !== null);

    // Limit visible images to MAX_VISIBLE_IMAGES
    const visibleImages = validImages.slice(0, MAX_VISIBLE_IMAGES);
    const remainingImagesCount = validImages.length - MAX_VISIBLE_IMAGES;

    const handleOpenChange = (isOpen) => {
        if (!isOpen) {
            setSelectedImage(null);
            setShowAllImages(false);
        }
    };

    const handleShowAllImages = () => {
        setShowAllImages(true);
    };

    const imageObjects = visibleImages.map((src, index) => ({
        src, alt: `Gallery image ${index + 1}`, className: index === 0 ? 'md:col-span-2 md:row-span-2' : ''
    }));

    return (<section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-base font-semibold leading-7 text-sky-500">Thư Viện Ảnh</h2>
                <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                    Khoảnh Khắc Đáng Nhớ Tại Evo Education
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                    Cùng nhìn lại những giờ học lập trình sôi nổi, những dự án sáng tạo và những nụ cười rạng rỡ của
                    học viên tại Evo Education.
                </p>
            </div>

            <Dialog onOpenChange={handleOpenChange}>
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4 md:grid-flow-row-dense">
                    {imageObjects.map((image, index) => (<div
                        key={index}
                        className={`group relative cursor-pointer overflow-hidden rounded-xl shadow-lg ${image.className}`}
                    >
                        <DialogTrigger asChild onClick={() => {
                            // If this is the last visible image and there are more images, show all images
                            if (index === MAX_VISIBLE_IMAGES - 1 && remainingImagesCount > 0) {
                                handleShowAllImages();
                            } else {
                                setSelectedImage(image.src);
                            }
                        }}>
                            <div>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                {/* Overlay for the last image showing remaining count */}
                                {index === MAX_VISIBLE_IMAGES - 1 && remainingImagesCount > 0 && (<div
                                    className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                                    <span className="text-3xl font-bold">+{remainingImagesCount}</span>
                                    <span className="text-sm mt-2">Xem tất cả</span>
                                </div>)}
                                {/* Standard hover overlay for regular images */}
                                {!(index === MAX_VISIBLE_IMAGES - 1 && remainingImagesCount > 0) && (<div
                                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Camera
                                        className="h-10 w-10 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300"/>
                                </div>)}
                            </div>
                        </DialogTrigger>
                    </div>))}
                </div>

                {/* Dialog for viewing a single enlarged image */}
                {selectedImage && !showAllImages && (
                    <DialogContent className="max-w-[90vw] w-[1000px] p-0 bg-transparent border-0">
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
                                width={1400}
                                height={900}
                                className="object-contain w-full h-full rounded-lg"
                            />
                        </div>
                    </DialogContent>)}

                {/* Dialog for viewing all images in a list */}
                {showAllImages && (
                    <DialogContent className="max-w-[90vw] w-[1200px] max-h-[90vh] overflow-y-auto bg-white p-6">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Tất cả hình ảnh</DialogTitle>
                            <DialogDescription>
                                Thư viện hình ảnh hoạt động tại Evo Education
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {validImages.map((src, index) => (
                                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                                    <Image
                                        src={src}
                                        alt={`Gallery image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                                        onClick={() => {
                                            setSelectedImage(src);
                                            setShowAllImages(false);
                                        }}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Camera className="h-8 w-8 text-white"/>
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </DialogContent>)}
            </Dialog>
        </div>
    </section>);
}

export default GallerySection;