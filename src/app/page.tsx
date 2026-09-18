import ProfileSidebar from "@/components/ProfileSidebar";
import ProjectList from "@/components/ProjectList";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div
      id="home"
      className="mx-auto grid max-w-6xl gap-10 px-4 pb-8 pt-28 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12"
    >
      <ProfileSidebar />

      <main className="min-w-0">
        <ProjectList />
        <Capabilities />
        <Contact />
      </main>
    </div>
  );
}
