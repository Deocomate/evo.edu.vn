/* src/views/ParentsCorner/Detail/components/OtherTestimonialsSection.jsx */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const extractQuote = (htmlString) => {
    if (!htmlString) return "";
    const quoteMatch = htmlString.match(/<blockquote>(.*?)<\/blockquote>/);
    return quoteMatch ? quoteMatch[1] : htmlString.replace(/<[^>]+>/g, '').substring(0, 100) + '...';
};

function OtherTestimonialsSection({ testimonials }) {
    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    return (
        <section className="py-16 sm:py-24 border-t bg-gray-50/50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-sky-500 inline-block">
                    Chia Sẻ Từ Các Phụ Huynh Khác
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map(item => (
                        <Link key={item.id} href={`/parents-corner/${item.slug}`} className="block h-full group">
                            <Card className="flex flex-col h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-6">
                                <CardContent className="p-0 flex flex-col items-center text-center">
                                    <Avatar className="w-16 h-16 mb-4">
                                        <AvatarImage src={item.image} alt={item.name} />
                                        <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <h4 className="font-bold text-gray-800 group-hover:text-sky-600 transition-colors">{item.name}</h4>
                                    <p className="text-sm text-gray-500 mb-3">{item.describe}</p>
                                    <blockquote className="text-sm text-gray-600 italic line-clamp-3">
                                        "{extractQuote(item.content)}"
                                    </blockquote>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OtherTestimonialsSection;