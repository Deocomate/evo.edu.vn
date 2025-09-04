/* ===== Home/components/FaqSection.jsx ===== */
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function FaqSection({ faqs }) {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-base font-semibold leading-7 text-sky-500">Giải Đáp Thắc Mắc</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Câu Hỏi Thường Gặp
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 font-medium">
                        Những thắc mắc phổ biến nhất về các khóa học lập trình và dịch vụ tại Evo Education đã được chúng tôi tổng hợp tại đây để bạn tiện theo dõi.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((item, index) => (
                            <AccordionItem value={`item-${index + 1}`} key={index}>
                                <AccordionTrigger className="text-left text-lg font-bold hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-gray-700 leading-relaxed font-medium">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default FaqSection;
