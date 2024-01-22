import { ProjectCard } from "../components/project-card";

const projectData = [
  {
    title: "Debt Collection Service Provider",
    projectDescription: {
      projectAim:
        "Building a digital identity platform catering to B2B needs enabling partners to verify identities and provide necessary proofs for transactions.",
      techStack:
        "TypeScript, Next.js, Material UI, styled-components, Nest.js, postgres, Gitlab CI/CD and more.",
      role: "Led the frontend development of a new subproject, setting standards and closely collaborating with architects, developers, and designers.",
      timePeriod: "08/2023 - 01/2024",
    },
  },
  {
    title: "Manufacturer of Outdoor Equipment",
    projectDescription: {
      projectAim:
        "Developing a web platform for a new product line, aiding market entry. Supported staff by providing product information and configuration options.",
      techStack:
        "TypeScript, React, Nest.js, Material UI, styled-components, Terraform, Azure and more.",
      role: "Made contributions across the full stack, from frontend to backend, while also taking on responsibilities for infrastructure and DevOps.",
      timePeriod: "05/2021 - 12/2022",
    },
  },
];

export default function Projects() {
  return (
    <div className="bg-heroBlock flex w-full flex-col relative justify-center items-center px-4 py-6 max-md:max-w-full max-md:px-5">
      <header className="text-isLarge md:text-screenLarge text-white mb-5 text-center font-semibold tracking-tight ">
        Explore some of my projects
      </header>
      <div className="flex flex-col md:flex-row justify-center pb-1 gap-5 md:gap-8 self-stretch max-md:max-w-full max-md:mt-10">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            projectDescription={project.projectDescription}
          />
        ))}
      </div>
    </div>
  );
}
