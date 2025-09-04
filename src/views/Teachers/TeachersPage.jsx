// src/views/Teachers/TeachersPage.jsx
import React from 'react';
import CtaSection from './components/CtaSection';
import PhilosophySection from './components/PhilosophySection';
import QualityStandardsSection from './components/QualityStandardsSection';
import TeacherProfilesSection from './components/TeacherProfilesSection';
import TeachersHero from './components/TeachersHero';
import WorkPermitsSection from './components/WorkPermitsSection';

function TeachersPage({initialTeachersData}) {
    return (<main>
        <TeachersHero/>
        <PhilosophySection/>
        <TeacherProfilesSection initialTeachersData={initialTeachersData}/>
        {/* Giữ lại component này vì nội dung đã được thay đổi thành "Dự án học viên" */}
        <WorkPermitsSection/>
        <QualityStandardsSection/>
        <CtaSection/>
    </main>);
}

export default TeachersPage;