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
    <main className="min-h-dvh container px-4 md:px-8 m-auto flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl md:text-9xl font-serif">
        Hi there, <span className="text-2xl md:text-7xl block">I'm Mohamed Mounir</span>
      </h1>
      <br />
      <p className="text-sm md:text-xl">
        Staff software engineer with over a decade of experience in the frontend domain.
      </p>
      <p className="text-sm md:text-xl">Based between Germany 🇩🇪 and Egypt 🇪🇬.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 mt-4 text-sm md:text-base font-mono">
        <a
          title="Github"
          href="https://github.com/mmounirf/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/mmounirf/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          title="Resume"
          href="/Mohamed Mounir - Staff Frontend Engineer.pdf"
          rel="noopener noreferrer"
          download
        >
          Resume
        </a>
      </div>
    </main>
  );
}
