// src/pages_jsx/Teachers/components/QualityStandardsSection.jsx
import React from 'react';
import { Award, Code, UserCheck } from 'lucide-react';

const standards = [
    {
        icon: <UserCheck className="h-10 w-10 text-white" />,
        title: "Chuyên Môn Sư Phạm",
        description: "100% giảng viên được đào tạo bài bản về kỹ năng sư phạm để truyền đạt kiến thức phức tạp một cách hiệu quả nhất."
    },
    {
        icon: <Code className="h-10 w-10 text-white" />,
        title: "Giàu Kinh Nghiệm Thực Chiến",
        description: "Đội ngũ chuyên gia từ các công ty công nghệ hàng đầu, mang đến những kiến thức và dự án thực tế, cập nhật nhất."
    },
    {
        icon: <Award className="h-10 w-10 text-white" />,
        title: "Tận Tâm & Truyền Cảm Hứng",
        description: "Luôn đồng hành, khơi dậy niềm đam mê lập trình và tư duy sáng tạo cho từng học viên trong suốt quá trình học."
    }
];

function QualityStandardsSection() {
    return (
        <section className="bg-sky-500 py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {standards.map((standard, index) => (
                        <div key={index} className="flex flex-col items-center text-center text-white">
                            <div className="mb-4">{standard.icon}</div>
                            <h3 className="text-2xl font-bold">{standard.title}</h3>
                            <p className="mt-2 text-base text-sky-100 max-w-xs">{standard.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default QualityStandardsSection;