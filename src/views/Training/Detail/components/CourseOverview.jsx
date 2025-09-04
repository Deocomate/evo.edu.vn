/* ===== src/views/Training/Detail/components/CourseOverview.jsx ===== */
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, BookOpen } from 'lucide-react';

function InfoPill({ icon, title, content }) {
    return (
        <div className="flex flex-col items-center text-center gap-3">
            <div className="flex-shrink-0 text-sky-500">{icon}</div>
            <div>
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="text-gray-700 mt-1 font-medium">{content}</p>
            </div>
        </div>
    );
}

function CourseOverview({ overview }) {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <Card className="p-8 md:p-12">
                    <CardHeader className="p-0 mb-8 text-center">
                        <CardTitle className="text-3xl font-bold">Tổng Quan Khóa Học</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <InfoPill icon={<Users className="h-8 w-8" />} title="Đối tượng học viên" content={overview.age} />
                            <InfoPill icon={<Target className="h-8 w-8" />} title="Mục tiêu" content={overview.outcome} />
                            <InfoPill icon={<BookOpen className="h-8 w-8" />} title="Phương pháp giảng dạy" content={overview.method} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

export default CourseOverview;