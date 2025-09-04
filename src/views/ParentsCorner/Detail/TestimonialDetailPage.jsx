/* src/views/ParentsCorner/Detail/TestimonialDetailPage.jsx */
import React from 'react';
import Image from 'next/image';
import OtherTestimonialsSection from './components/OtherTestimonialsSection';

function TestimonialDetailPage({ data: testimonial, otherData: otherTestimonials }) {
    if (!testimonial) {
        return null;
    }

    return (
        <main>
            <div className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <header className="mb-8 text-center border-b pb-8">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src={testimonial.image}
                                    alt={`Chân dung ${testimonial.name}`}
                                    width={128}
                                    height={128}
                                    className="rounded-full object-cover w-32 h-32 border-4 border-sky-200 shadow-md"
                                />
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                                {testimonial.name}
                            </h1>
                            <p className="mt-2 text-lg text-gray-500 font-medium">{testimonial.describe}</p>
                        </header>

                        <div
                            className="prose prose-lg max-w-none prose-blockquote:border-sky-500 prose-blockquote:text-gray-700 prose-blockquote:font-medium prose-p:font-medium prose-li:font-medium prose-img:rounded-xl mt-8"
                            dangerouslySetInnerHTML={{ __html: testimonial.content || '' }}
                        />
                    </div>
                </div>
            </div>

            <OtherTestimonialsSection testimonials={otherTestimonials} />
        </main>
    );
}

export default TestimonialDetailPage;