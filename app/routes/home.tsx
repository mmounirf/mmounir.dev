export function meta() {
  return [
    { title: "Mohamed Mounir - Staff Frontend Engineer" },
    {
      name: "description",
      content:
        "Staff Frontend Engineer with 10+ years of experience architecting scalable, high-performance web applications that drive business growth across global markets. Proven expertise in leading cross-functional initiatives, building foundational systems, and mentoring senior engineers. Passionate about aligning technical strategy with product goals to deliver exceptional user experiences.",
    },
  ];
}

export default function Home() {
  return (
    <main className="min-h-dvh container m-auto flex flex-col items-center justify-center">
      <h1 className="text-2xl lg:text-9xl font-serif text-center">
        Hi there, <span className="text-6xl block">I'm Mohamed Mounir</span>
      </h1>
      <br />
      <p className="text-lg">
        Staff software engineer with over a decade of experience in the frontend domain.
      </p>
      <p className="text-lg">Based between Germany 🇩🇪 and Egypt 🇪🇬.</p>
    </main>
  );
}
