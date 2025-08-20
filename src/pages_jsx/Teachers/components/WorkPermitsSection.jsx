"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Eye } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from "@/components/ui/carousel";

// Thay thế ảnh giấy phép bằng ảnh dự án/hoạt động của học viên
const projectImages = [
    '/assets/images/evo-images/10.jpg',
    '/assets/images/evo-images/11.jpg',
    '/assets/images/evo-images/12.jpg',
    '/assets/images/evo-images/13.jpg',
    '/assets/images/evo-images/14.jpg',
    '/assets/images/evo-images/15.jpg',
    '/assets/images/evo-images/16.jpg',
    '/assets/images/evo-images/17.jpg',
    '/assets/images/evo-images/18.jpg',
];

function WorkPermitsSection() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto lg:px-9 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-sky-500">Thành Quả Học Tập</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Dự Án Học Viên Tiêu Biểu
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        Cùng xem qua những sản phẩm sáng tạo và ấn tượng được chính các học viên tại Evo Education xây dựng và phát triển trong quá trình học.
                    </p>
                </div>

                <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-6xl mx-auto"
                    >
                        <CarouselContent className="-ml-4">
                            {projectImages.map((src, index) => (
                                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                    <DialogTrigger asChild onClick={() => setSelectedImage(src)}>
                                        <div className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg">
                                            <AspectRatio ratio={4 / 3}>
                                                <Image
                                                    src={src}
                                                    alt={`Dự án học viên Evo Education ${index + 1}`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <Eye className="h-10 w-10 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                                                </div>
                                            </AspectRatio>
                                        </div>
                                    </DialogTrigger>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
                        <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
                        <CarouselDots />
                    </Carousel>

                    {selectedImage && (
                        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
                            <DialogHeader className="sr-only">
                                <DialogTitle>Xem chi tiết dự án</DialogTitle>
                                <DialogDescription>
                                    Hình ảnh chi tiết dự án của học viên tại Evo Education.
                                </DialogDescription>
                            </DialogHeader>
                            <Image
                                src={selectedImage}
                                alt="Xem chi tiết dự án học viên"
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

export default WorkPermitsSection;