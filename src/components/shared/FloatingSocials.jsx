/* ===== src/components/shared/FloatingSocials.jsx ===== */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function FloatingSocials({ contactInfo }) {
    if (!contactInfo) {
        return null;
    }

    const { facebook, zalo } = contactInfo;

    return (
        <div
            className="fixed bottom-5 right-5 z-50 flex flex-col gap-4 animate-in fade-in-0 slide-in-from-bottom-10 duration-700 ease-out">
            {facebook && (
                <Link href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Evo Education">
                    <div className="relative group w-14 h-14 transition-transform duration-300 hover:scale-110">
                        <span
                            className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping group-hover:animate-none"></span>
                        <div className="relative w-14 h-14">
                            <Image
                                src="/assets/logos/facebook-logo.png"
                                alt="Facebook Evo Education"
                                fill
                                sizes="56px"
                                className="object-contain rounded-full shadow-lg group-hover:shadow-xl transition-shadow"
                            />
                        </div>
                    </div>
                </Link>)}
            {zalo && (
                <Link href={zalo} target="_blank" rel="noopener noreferrer" aria-label="Zalo Evo Education">
                    <div className="relative group w-14 h-14 transition-transform duration-300 hover:scale-110">
                        <span
                            className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping group-hover:animate-none [animation-delay:-1.5s]"></span>
                        <div className="relative w-14 h-14">
                            <Image
                                src="/assets/logos/zalo-logo.png"
                                alt="Zalo Evo Education"
                                fill
                                sizes="56px"
                                className="object-contain rounded-full shadow-lg group-hover:shadow-xl transition-shadow"
                            />
                        </div>
                    </div>
                </Link>)}
        </div>
    );
}

export default FloatingSocials;