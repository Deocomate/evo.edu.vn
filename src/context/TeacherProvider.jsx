"use client";

import React, { createContext, useContext, useState } from 'react';

const TeacherContext = createContext(null);

export function TeacherProvider({ children }) {
    const [teachers, setTeachers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [isInitialized, setIsInitialized] = useState(false);

    const value = {
        teachers,
        setTeachers,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        isInitialized,
        setIsInitialized
    };

    return (
        <TeacherContext.Provider value={value}>
            {children}
        </TeacherContext.Provider>
    );
}

export function useTeacher() {
    const context = useContext(TeacherContext);
    if (!context) {
        throw new Error('useTeacher must be used within a TeacherProvider');
    }
    return context;
}