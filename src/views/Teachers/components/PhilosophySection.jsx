// src/views/Teachers/components/PhilosophySection.jsx
import React from 'react';
import Image from 'next/image';

function PhilosophySection() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="prose prose-lg max-w-none text-center lg:text-left prose-p:font-medium">
                        <h2 className="text-base font-semibold leading-7 text-sky-500">Đội ngũ giảng viên chất lượng</h2>
                        <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">
                            Yếu tố cốt lõi tạo nên sự khác biệt tại Evo Education
                        </p>
                        <p className="mt-6 leading-8 text-gray-600">
                            Evo Education đặc biệt chú trọng đến chất lượng của đội ngũ giảng dạy. Giảng viên tại học viện là những chuyên gia có kinh nghiệm thực chiến trong ngành công nghệ, sở hữu đầy đủ bằng cấp và có chuyên môn sư phạm vững vàng.
                        </p>
                        <p className="mt-4 leading-8 text-gray-600">
                            Họ không chỉ là người thầy mà còn là người truyền cảm hứng, luôn mang đến nguồn năng lượng tích cực và tâm huyết với nghề, trở thành người bạn đồng hành đáng tin cậy của học viên trên con đường chinh phục công nghệ.
                        </p>
                    </div>
                    <div className="w-full h-[500px] relative">
                        <Image
                            src="/assets/images/evo-images/3.jpg"
                            alt="Giảng viên Evo Education - người bạn đồng hành"
                            fill
                            className="rounded-xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PhilosophySection;