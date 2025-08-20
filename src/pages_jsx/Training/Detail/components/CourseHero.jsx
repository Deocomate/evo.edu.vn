/* ===== src/pages_jsx/Training/Detail/components/CourseHero.jsx ===== */
import React from 'react';
import Image from 'next/image';

function CourseHero({ title, description, imageSrc }) {
    return (
        <section className="relative w-full h-[70vh] sm:h-screen flex items-center justify-center text-white">
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                quality={90}
                priority
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
                    {title}
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
                    {description}
                </p>
            </div>
        </section>
    );
}

export default CourseHero;