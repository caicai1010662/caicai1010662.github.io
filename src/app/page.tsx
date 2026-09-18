import ProfileSidebar from "@/components/ProfileSidebar";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <div
      id="home"
      className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 pb-20 pt-24 lg:grid-cols-[280px_minmax(0,760px)] lg:justify-center lg:gap-16 lg:pt-28"
    >
      <ProfileSidebar />
      <main className="min-w-0">
        <ProjectList />
      </main>
    </div>
  );
}
