/* ===== src/views/Training/components/TrainingHero.jsx ===== */
import React from 'react';
import Image from 'next/image';

function TrainingHero() {
    return (
        <section className="relative w-full h-[70vh] sm:h-screen flex items-center justify-center text-white">
            {/* Background Image */}
            <Image
                src="/assets/images/evo-images/6.jpg"
                alt="Chương trình đào tạo lập trình tại Evo Education"
                fill
                className="object-cover"
                quality={90}
                priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight drop-shadow-md">
                    Chương Trình Đào Tạo
                </h1>
                <p className="mt-4 text-lg md:text-xl lg:text-xl max-w-3xl mx-auto drop-shadow-md">
                    Evo Education cung cấp lộ trình học tập toàn diện, được thiết kế chuyên biệt để đáp ứng nhu cầu phát triển tư duy lập trình ở mọi lứa tuổi và trình độ.
                </p>
            </div>
        </section>
    );
}

export default TrainingHero;