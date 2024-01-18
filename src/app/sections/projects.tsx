import { ProjectCard } from "../components/project-card";

const projectData = [
  {
    title: "German Debt Collection Service Provider",
    projectDescription: {
      projectAim:
        "Building a digital identity platform catering to B2B needs enabling partners to verify identities and provide necessary proofs for transactions.",
      techStack:
        "TypeScript, Next.js, MUI, styled-components, Nest.js, postgres, Gitlab CI/CD and more.",
      role: "Led the frontend development of a new subproject, setting standards and closely collaborating with architects, developers, and designers.",
    },
  },
  {
    title: "German Industrial Company",
    projectDescription: {
      projectAim:
        "Developing a web platform for a new product line, aiding market entry. Supported dealers and staff, providing product information and configuration options.",
      techStack:
        "TypeScript, React, Nest.js, MUI, styled-components, Azure and more.",
      role: "Contributed to frontend and backend development, ensuring software quality through agile methods and robust testing.",
    },
  },
];

export default function Projects() {
  return (
    <div className="bg-heroBlock flex w-full flex-col relative justify-center items-center px-4 py-6 max-md:max-w-full max-md:px-5">
      <header className="text-white mb-5 text-center text-4xl sm:text-2xl font-semibold tracking-tight whitespace-nowrap">
        Explore some of my projects
      </header>
      <div className="flex sm:flex-col justify-center sm:gap-2 gap-5 self-stretch max-md:max-w-full max-md:mt-10">
      {projectData.map((project, index) => (
        <ProjectCard key={index} title={project.title} projectDescription={project.projectDescription} />
      ))}
      </div>
    </div>
  );
}
