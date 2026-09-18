import ProfileSidebar from "@/components/ProfileSidebar";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <div
      id="home"
      className="mx-auto grid w-full max-w-[1120px] gap-10 px-5 pb-20 pt-24 lg:grid-cols-[238px_minmax(0,750px)] lg:justify-center lg:gap-[74px] lg:pt-[104px]"
    >
      <ProfileSidebar />
      <main className="min-w-0">
        <ProjectList />
      </main>
    </div>
  );
}
