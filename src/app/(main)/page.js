import HomePage from "@/pages_jsx/Home/HomePage";
import { getHomepageData } from "@/services/homeService";
import { getFeaturedTeachers } from "@/services/teacherService";
import { getTrainings } from "@/services/trainingService";

export default async function Home() {
  const [homeData, featuredTeachers, trainingData] = await Promise.all([
    getHomepageData(),
    getFeaturedTeachers(6),
    getTrainings(6) 
  ]);

  if (!homeData) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p>Could not load homepage data. Please try again later.</p>
      </main>
    );
  }

  const pageData = { 
    ...homeData, 
    teachers: featuredTeachers,
    trainings: trainingData.data
  };

  return (<HomePage data={pageData} />);
}