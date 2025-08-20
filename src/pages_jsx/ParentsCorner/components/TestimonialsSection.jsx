/* src/pages_jsx/ParentsCorner/components/TestimonialsSection.jsx */
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselDots, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';

const extractQuote = (htmlString) => {
    if (!htmlString) return "";
    const quoteMatch = htmlString.match(/<blockquote>(.*?)<\/blockquote>/);
    return quoteMatch ? quoteMatch[1] : htmlString.replace(/<[^>]+>/g, '').substring(0, 150) + '...';
};

function TestimonialsSection({ testimonials }) {
    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    return (
        <section id='testimonials' className="bg-gray-50 py-24">
            <div className="container mx-auto lg:px-4 px-9">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-sky-500">Phụ Huynh Nói Về Evo Education</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Câu Chuyện Thành Công
                    </p>
                </div>

                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full max-w-7xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((item, index) => (
                            <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 lg:pl-6">
                                <Link href={`/parents-corner/${item.slug}`} className="block h-full group py-2">
                                    <Card className="flex flex-col h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                        <CardContent className="p-6 text-center flex flex-col flex-grow items-center">
                                            <Avatar className="w-20 h-20 mb-4 mx-auto">
                                                <AvatarImage src={item.image} alt={item.name} />
                                                <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <blockquote className="text-base text-gray-700 italic flex-grow my-4">
                                                "{extractQuote(item.rate)}"
                                            </blockquote>
                                            <div>
                                                <p className="font-bold text-gray-900">{item.name}</p>
                                                <p className="text-sm text-gray-500">{item.describe}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <CarouselDots />
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                    <CarouselDots className="md:hidden" />
                </Carousel>
            </div>
        </section>
    );
}

export default TestimonialsSection;