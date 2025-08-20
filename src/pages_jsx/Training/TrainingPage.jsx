/* ===== src/pages_jsx/Training/TrainingPage.jsx ===== */
import React from 'react';
import TrainingHero from './components/TrainingHero';
import ProgramsList from './components/ProgramsList';

function TrainingPage({ initialTrainingData }) {
    return (
        <main>
            <TrainingHero />
            <ProgramsList initialTrainingData={initialTrainingData} />
        </main>
    );
}

export default TrainingPage;