/* ===== src/views/Training/Detail/components/CourseContentSection.jsx ===== */
import React from 'react';

function CourseContentSection({ content }) {
    if (!content) {
        return null;
    }

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-base font-semibold leading-7 text-sky-500">Tổng quan</h2>
                        <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-800">
                            Nội Dung Khóa Học
                        </p>
                    </div>
                    <div
                        className="prose prose-lg max-w-none prose-p:font-medium prose-li:font-medium prose-p:text-gray-700 prose-li:text-gray-700 prose-img:rounded-xl prose-h3:text-gray-800"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </div>
        </section>
    );
}

export default CourseContentSection;