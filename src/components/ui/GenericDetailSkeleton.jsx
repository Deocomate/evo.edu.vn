// src/components/ui/GenericDetailSkeleton.jsx
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function GenericDetailSkeleton() {
    return (
        <main>
            {/* Skeleton for Hero Section */}
            <div className="relative w-full h-screen flex items-center justify-center bg-gray-200">
                <div className="text-center">
                    <Skeleton className="h-12 w-80 max-w-full mx-auto" />
                    <Skeleton className="h-6 w-96 max-w-full mx-auto mt-4" />
                </div>
            </div>

            {/* Skeleton for Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-center gap-8 border-b pb-8 mb-8">
                        <Skeleton className="w-48 h-48 rounded-full flex-shrink-0" />
                        <div className="flex-grow space-y-4 w-full">
                            <Skeleton className="h-10 w-3/4" />
                            <Skeleton className="h-6 w-1/2" />
                            <div className="flex gap-4">
                                <Skeleton className="h-8 w-24 rounded-full" />
                                <Skeleton className="h-8 w-24 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none space-y-4">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-5/6" />
                        <br />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-1/2" />
                    </div>
                </div>
            </section>

            {/* Skeleton for Other Items Section */}
            <section className="py-16 sm:py-24 border-t bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <Skeleton className="h-8 w-48 mb-8" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="text-center">
                                <Skeleton className="w-32 h-32 mx-auto rounded-full" />
                                <Skeleton className="h-5 w-3/4 mx-auto mt-4" />
                                <Skeleton className="h-4 w-1/2 mx-auto mt-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}