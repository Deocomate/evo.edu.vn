/* src/pages_jsx/ParentsCorner/ParentsCornerPage.jsx */
import React from 'react';
import HeroSection from './components/HeroSection';
import KeyResourcesSection from './components/KeyResourcesSection';
import DownloadsSection from './components/DownloadsSection';
// import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from '@/pages_jsx/Home/components/FaqSection';

function ParentsCornerPage({handbookArticles, documents, testimonials, faqs}) {
    return (<main>
        <HeroSection/>
        <KeyResourcesSection/>
        <DownloadsSection documents={documents}/>
        {/*<TestimonialsSection testimonials={testimonials}/>*/}
        <FaqSection faqs={faqs}/>
    </main>);
}

export default ParentsCornerPage;