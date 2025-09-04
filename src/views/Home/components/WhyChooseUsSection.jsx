/* ===== Home/components/WhyChooseUsSection.jsx ===== */
import React from 'react';
import {Users, BookOpen, Sparkles, ShieldCheck, TrendingUp, Laptop} from 'lucide-react';
import {Card, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';

const features = [{
    icon: <Users className="h-10 w-10 text-sky-500"/>,
    title: 'Đội Ngũ Giảng Viên Chuyên Môn',
    description: 'Giảng viên giàu kinh nghiệm thực chiến trong ngành công nghệ, có chuyên môn sư phạm và khả năng truyền đạt hiệu quả.'
}, {
    icon: <Laptop className="h-10 w-10 text-green-500"/>,
    title: 'Cơ Sở Vật Chất Hiện Đại',
    description: 'Phòng học trang bị đầy đủ máy tính cấu hình cao, màn hình lớn và các công cụ học tập tiên tiến, tạo môi trường thực hành tốt nhất.'
}, {
    icon: <BookOpen className="h-10 w-10 text-blue-500"/>,
    title: 'Lộ Trình Đào Tạo Toàn Diện',
    description: 'Chương trình học bài bản từ cơ bản đến nâng cao, phù hợp với từng độ tuổi, giúp học viên phát triển kỹ năng một cách hệ thống.'
}, {
    icon: <ShieldCheck className="h-10 w-10 text-red-500"/>,
    title: 'Cam Kết Đầu Ra',
    description: 'Chương trình được thiết kế để đảm bảo học viên đạt được những kỹ năng và kiến thức cụ thể, có thể tạo ra sản phẩm thực tế sau mỗi khóa học.'
}, {
    icon: <Sparkles className="h-10 w-10 text-yellow-500"/>,
    title: 'Môi Trường Học Tập <br/> Sáng Tạo',
    description: 'Evo không chỉ là nơi học, mà là một cộng đồng nơi học viên được khuyến khích tò mò, sáng tạo và hiện thực hóa ý tưởng.'
}, {
    icon: <TrendingUp className="h-10 w-10 text-purple-500"/>,
    title: 'Học Đi Đôi Với Hành',
    description: 'Áp dụng phương pháp học tập dựa trên dự án (Project-Based Learning), giúp học viên áp dụng kiến thức vào các dự án thực tế.'
}];

function WhyChooseUsSection() {
    return (<section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                    Tại sao chọn Evo Education?
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-medium">
                    Chúng tôi tự hào mang đến một môi trường học tập công nghệ toàn diện, nơi chất lượng và sự tận
                    tâm luôn được đặt lên hàng đầu.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (<Card
                    key={index}
                    className="text-center p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-sky-400"
                >
                    <CardHeader className="items-center">
                        <div
                            className="flex items-center justify-center h-20 w-20 rounded-full bg-sky-100 mb-5 mx-auto">
                            {feature.icon}
                        </div>
                        <CardTitle
                            className="text-2xl font-bold text-gray-800 tracking-tight"
                            dangerouslySetInnerHTML={{__html: feature.title}}
                        />
                    </CardHeader>
                    <CardDescription className="text-gray-600 text-base font-medium">
                        {feature.description}
                    </CardDescription>
                </Card>))}
            </div>
        </div>
    </section>);
}

export default WhyChooseUsSection;
