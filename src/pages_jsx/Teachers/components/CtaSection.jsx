// src/pages_jsx/Teachers/components/CtaSection.jsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

function CtaSection() {
    return (
        <section className="bg-sky-50 py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Sẵn sàng đồng hành cùng đội ngũ chuyên gia của Evo Education?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                    Hãy để chúng tôi chắp cánh cho hành trình chinh phục công nghệ và kiến tạo tương lai số của bạn.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white transition-transform hover:scale-105">
                        <Link href="/training">
                            Khám phá các khóa học <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default CtaSection;