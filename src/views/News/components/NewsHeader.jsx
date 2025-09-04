import React from 'react';

// Component này khá chung chung, không cần thay đổi.
// Tiêu đề "Tin tức và Sự kiện" phù hợp cho cả trung tâm lập trình.
function NewsHeader({ categoryInfo }) {
    if (categoryInfo) {
        return (
            <div className="mb-12 border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-900">{categoryInfo.name}</h1>
            </div>
        );
    }

    return (
        <div className="mb-12 border-b pb-4">
            <h1 className="text-3xl font-bold text-gray-900">
                Tin tức & Sự kiện Công nghệ
            </h1>
        </div>
    );
}

export default NewsHeader;
