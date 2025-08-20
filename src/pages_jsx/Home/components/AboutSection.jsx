/* ===== Home/components/AboutSection.jsx ===== */
import React from 'react';
import Image from 'next/image';
import {Eye, Rocket, Users } from 'lucide-react';

function AboutSection() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-24 items-center">
                    <div className="prose prose-lg max-w-none flex flex-col justify-center prose-p:font-medium">
                        <div className="text-center md:text-left">
                            <h2 className="text-base font-semibold leading-7 text-sky-500">Về Chúng Tôi</h2>
                            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Chào mừng đến với Evo Education
                            </h3>
                            <p className="mt-6 leading-8 text-gray-600">
                                "Học viện Sáng tạo Công nghệ Trẻ Evo.edu.vn là đơn vị đào tạo lập trình và công nghệ uy tín, chuyên cung cấp các chương trình học chất lượng cao dành cho trẻ em và thanh thiếu niên. Với đội ngũ giảng viên giàu kinh nghiệm thực chiến, cơ sở vật chất hiện đại và giáo trình chuẩn quốc tế, Evo cam kết mang đến môi trường học tập chuyên nghiệp, hiệu quả và truyền cảm hứng."
                            </p>
                            <p className="mt-4 leading-8 text-gray-600">
                                Tại Evo Education, chúng tôi tự hào có đội ngũ giảng viên tâm huyết, sáng tạo, luôn sẵn sàng tạo ra môi trường học tập thú vị. Evo không chỉ là nơi học, mà còn là một cộng đồng, nơi các bạn trẻ có cơ hội giao lưu, trao đổi kiến thức và phát triển kỹ năng của thế kỷ 21.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <Image
                            src="/assets/images/evo-images/1.jpg"
                            alt="Học viên tại Evo Education"
                            width={1200}
                            height={628}
                            className="rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div className="w-full h-[400px] md:h-[500px] flex items-center order-last md:order-first">
                        <Image
                            src="/assets/images/evo-images/2.jpg"
                            alt="Môi trường học tập sáng tạo tại Evo Education"
                            width={600}
                            height={600}
                            className="rounded-xl shadow-2xl object-cover w-full h-full md:h-[480px] transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="prose prose-lg max-w-none h-auto md:h-[500px] flex flex-col justify-center prose-p:font-medium prose-dd:font-medium">
                        <div className="text-center md:text-left">
                            <h2 className="text-base font-semibold leading-7 text-sky-500">Định Hướng Phát Triển</h2>
                            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Tầm Nhìn & Sứ Mệnh
                            </h3>
                            <p className="mt-6 leading-8 text-gray-600">
                                Chúng tôi mơ ước về một thế hệ trẻ Việt Nam làm chủ công nghệ, sẵn sàng cho kỷ nguyên số và phát triển toàn diện.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <Rocket className="absolute left-1 top-1 h-5 w-5 text-sky-500" />
                                        Tầm nhìn.
                                    </dt>
                                    <dd className="inline"> Trở thành hệ sinh thái giáo dục công nghệ hàng đầu tại Việt Nam, nơi trẻ em được trang bị những kỹ năng cần thiết để trở thành những nhà lãnh đạo công nghệ trong tương lai.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <Eye className="absolute left-1 top-1 h-5 w-5 text-sky-500" />
                                        Sứ mệnh.
                                    </dt>
                                    <dd className="inline"> Cung cấp các khóa học chất lượng cao, giúp trẻ em phát triển toàn diện các kỹ năng của thế kỷ 21 bao gồm tư duy logic, kỹ năng lập trình, sáng tạo và làm việc nhóm.</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
