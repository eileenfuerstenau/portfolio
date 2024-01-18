import { SkillCard } from "../components/skill-card";

const skillsData = [
  {
    iconDescription: "coding",
    title: "Coding",
    content:
      "I'm adept in various frontend and backend technologies, but I feel most at home in TypeScript, React, Next.js, and Node.js environments.",
  },
  {
    iconDescription: "speaker",
    title: "Speaking",
    content:
      "I'm eager to share my accumulated knowledge. My talk topics range from the human side of software engineering, like mentoring, to technical best practices.",
  },
  {
    iconDescription: "moderating",
    title: "Moderating",
    content:
      "Presenting results, moderating meetings, and leading workshops are among my regular tasks. I'm particularly passionate about the agile methodology toolkit.",
  },
  {
    iconDescription: "learning",
    title: "Education",
    content:
      "In the rapidly evolving tech world, staying current is key. I regularly update my skills, pursuing certifications like Node.js Application Developer and Azure Fundamentals.",
  },
  {
    iconDescription: "leadership",
    title: "Leadership",
    content:
      "I see myself as someone who inspires their team and establishes a strong foundation for success. Guiding younger colleagues is something I value a lot.",
  },
  {
    iconDescription: "humor",
    title: "Memes",
    content:
      "Having fun at work is key for me, so I enjoy adding my humor and personality into projects. This helps to foster a lively atmosphere that fuels creativity and bonds the team.",
  },
];

export default function Skills() {
  return (
    <div className="flex w-full flex-col justify-center items-center px-4 py-6 max-md:max-w-full max-md:px-5">
      <header className="text-orange-500 mb-5 text-center text-4xl sm:text-2xl font-semibold tracking-tight whitespace-nowrap">
        I specialize in a range of skills:
      </header>
      <div className="grid grid-cols-3 sm:grid-cols-2 sm:gap-2 gap-5 self-stretch max-md:max-w-full max-md:mt-10">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            iconDescription={skill.iconDescription}
            title={skill.title}
            content={skill.content}
          />
        ))}
      </div>
    </div>
  );
}
