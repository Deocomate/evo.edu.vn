/* ===== src/views/Training/Detail/components/CourseDetailSkeleton.jsx ===== */
// src/views/Training/Detail/components/CourseDetailSkeleton.jsx
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CourseDetailSkeleton() {
    return (
        <main>
            {/* Skeleton for CourseHero */}
            <div className="relative w-full h-screen flex items-center justify-center bg-gray-200">
                <div className="text-center">
                    <Skeleton className="h-12 w-80 max-w-full mx-auto" />
                    <Skeleton className="h-6 w-96 max-w-full mx-auto mt-4" />
                </div>
            </div>

            {/* Skeleton for CourseOverview */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <Card className="p-8 md:p-12">
                        <CardHeader className="p-0 mb-8 text-center">
                            <Skeleton className="h-8 w-64 mx-auto" />
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="flex flex-col items-center text-center gap-3">
                                        <Skeleton className="h-8 w-8 rounded-full" />
                                        <Skeleton className="h-5 w-32" />
                                        <Skeleton className="h-4 w-40" />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Skeleton for SkillBreakdown */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Skeleton className="h-5 w-48 mx-auto" />
                        <Skeleton className="h-10 w-80 mx-auto mt-2" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[...Array(4)].map((_, i) => (
                            <Card key={i}>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <Skeleton className="h-14 w-14 rounded-full" />
                                        <Skeleton className="h-7 w-48" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <Skeleton className="h-5 w-full mb-2" />
                                    <Skeleton className="h-5 w-4/5" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}