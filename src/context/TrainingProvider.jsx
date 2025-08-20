// src/context/TrainingProvider.jsx
"use client";

import React, { createContext, useContext, useState } from 'react';

// Tạo Context
const TrainingContext = createContext(null);

// Tạo Provider Component
export function TrainingProvider({ children }) {
    const [programs, setPrograms] = useState([]);
    const [currentPage, setCurrentPage] = useState(0); // Bắt đầu từ 0 để dễ dàng nhận biết chưa được khởi tạo
    const [totalPages, setTotalPages] = useState(1);
    const [isInitialized, setIsInitialized] = useState(false);

    const value = {
        programs,
        setPrograms,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        isInitialized,
        setIsInitialized
    };

    return (
        <TrainingContext.Provider value={value}>
            {children}
        </TrainingContext.Provider>
    );
}

// Tạo custom hook để dễ sử dụng
export function useTraining() {
    const context = useContext(TrainingContext);
    if (!context) {
        throw new Error('useTraining must be used within a TrainingProvider');
    }
    return context;
}