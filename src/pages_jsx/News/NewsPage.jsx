"use client";

import React from 'react';
import NewsHeader from './components/NewsHeader';
import NewsContentLayout from './components/NewsContentLayout';

// Component này là layout chính, không cần thay đổi.
// Các thay đổi đã được thực hiện trong các component con của nó.
function NewsPage({newsData, categories, categoryInfo}) {
    return (<main className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-4">
            <NewsHeader categoryInfo={categoryInfo}/>
            <NewsContentLayout
                newsData={newsData}
                categories={categories}
                categoryInfo={categoryInfo}
            />
        </div>
    </main>);
}

export default NewsPage;
