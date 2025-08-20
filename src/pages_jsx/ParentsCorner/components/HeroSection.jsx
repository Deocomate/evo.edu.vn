/* src/pages_jsx/ParentsCorner/components/HeroSection.jsx */
import React from 'react';
import Image from 'next/image';

function HeroSection() {
    return (
        <section className="relative w-full h-[70vh] sm:h-screen flex items-center justify-center text-white">
            <Image
                src="/assets/images/evo-images/5.jpg"
                alt="Phụ huynh và học viên tại Evo Education"
                fill
                className="object-cover"
                quality={90}
                priority
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight drop-shadow-md">
                    Đồng hành cùng con làm chủ công nghệ
                </h1>
                <p className="mt-4 text-lg md:text-xl lg:text-xl max-w-3xl mx-auto drop-shadow-md">
                    Evo Education tin rằng sự hợp tác chặt chẽ giữa gia đình và nhà trường là chìa khóa cho sự thành công của trẻ.
                </p>
            </div>
        </section>
    );
}

export default HeroSection;