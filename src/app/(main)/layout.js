import { TrainingProvider } from "@/context/TrainingProvider";
import { TeacherProvider } from "@/context/TeacherProvider";

export default function MainLayout({ children }) {
  return (
    <TrainingProvider>
      <TeacherProvider>{children}</TeacherProvider>
    </TrainingProvider>
  );
}