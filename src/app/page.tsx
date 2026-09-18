import ProfileSidebar from "@/components/ProfileSidebar";
import ProjectList from "@/components/ProjectList";
import Contact from "@/components/Contact";

const capabilities = [
  {
    index: "01",
    title: "Mechanical & Kinematics",
    zh: "机械设计与运动学",
    items: ["SolidWorks", "URDF", "Coordinate Transform", "Workspace"],
  },
  {
    index: "02",
    title: "Motion Control",
    zh: "运动控制与系统集成",
    items: ["RS485", "Multi-axis Control", "Closed-loop Stepper", "SDK/API"],
  },
  {
    index: "03",
    title: "Desktop Software",
    zh: "桌面软件与可视化",
    items: ["C#/.NET", "WPF", "MVVM", "PyQt5", "Three.js"],
  },
  {
    index: "04",
    title: "AI Applications",
    zh: "AI 应用与工具调用",
    items: ["Python", "Agents SDK", "Tool Calling", "FastAPI"],
  },
];

export default function Home() {
  return (
    <>
      <div id="home" className="mx-auto grid max-w-6xl gap-10 px-4 pb-8 pt-28 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12">
        <ProfileSidebar />

        <main className="min-w-0">
          <ProjectList />

          <section id="about" className="scroll-mt-24 py-24">
            <div className="mb-8">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                Engineering Profile
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                我能做什么
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                从机械结构和运动控制，到桌面软件、可视化与 AI 工具调用，我更关注把不同技术组合成一个可运行、可验证的完整系统。
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {capabilities.map((capability) => (
                <article
                  key={capability.index}
                  className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-gray-400">{capability.index}</p>
                      <h3 className="mt-3 text-lg font-semibold">{capability.zh}</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {capability.title}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {capability.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <Contact />
        </main>
      </div>
    </>
  );
}
