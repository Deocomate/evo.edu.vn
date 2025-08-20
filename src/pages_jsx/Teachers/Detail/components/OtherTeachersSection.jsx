// src/pages_jsx/Teachers/Detail/components/OtherTeachersSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function OtherTeachersSection({ teachers }) {
    if (!teachers || teachers.length === 0) {
        return null;
    }

    return (
        <section className="py-16 sm:py-24 border-t bg-gray-50/50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-sky-500 inline-block">
                    Các Giảng Viên Khác
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {teachers.map(teacher => (
                        <Link key={teacher.id} href={`/teachers/${teacher.slug}`} className="group block text-center">
                            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md border-2 border-transparent group-hover:border-sky-400 transition-all">
                                <Image
                                    src={teacher.avatar}
                                    alt={teacher.full_name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    sizes="128px"
                                />
                            </div>
                            <div className="mt-4">
                                <h4 className="text-base font-semibold text-gray-800 group-hover:text-sky-600 transition-colors">
                                    {teacher.full_name}
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">
                                    {teacher.role}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OtherTeachersSection;