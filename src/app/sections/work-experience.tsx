import { Divider } from "@nextui-org/react";
import { ExperienceCard } from "../components/experience-card";

const experiencesData = [
  {
    subtitle: "MaibornWolff GmbH, Hamburg",
    title: "Software Engineer",
    content:
      "Designing, testing, and documenting software components for web applications, spanning both frontend and backend, within agile teams.",
    timePeriod: "05/2021 - present",
  },
  {
    subtitle: "IBM Deutschland GmbH, Hamburg",
    title: "Tech Solutions Specialist",
    content:
      "Spearheaded the acquisition and development of various IT projects, providing consultation and fostering customer satisfaction.",
    timePeriod: "03/2018 - 12/2020",
  },
  {
    subtitle: "German Academic Exchange Service, Ho Chi Minh City",
    title: "Project Supporter",
    content:
      "Supported diverse projects at the DAAD Information Center, promoting international exchange among scholars and students.",
    timePeriod: "08/2017 - 02/2018",
  },
  {
    subtitle: "IBM Deutschland GmbH, Hamburg",
    title: "Master@IBM Student",
    content:
      "Contributed to different sales initiatives while also successfully orchestrating and executing independent projects.",
    timePeriod: "09/2015 - 08/2017",
  },
  {
    subtitle: "Continental AG, Hannover",
    title: "Bachelor's Degree Student",
    content:
      "Involvement in various business sectors through practical placements during the dual study program.",
    timePeriod: "09/2012 - 08/2015",
  },
];

export default function WorkExperience() {
  return (
    <div className="flex w-full flex-col justify-center items-center px-4 py-6 max-md:max-w-full max-md:px-5">
      <header className="text-large text-orange-500 mb-5 text-center font-semibold tracking-tight whitespace-nowrap">
        Working experience
      </header>
      <div className="grid grid-cols-3 sm:grid-cols-1 sm:gap-2 gap-5 self-stretch max-md:max-w-full max-md:mt-10">
        {experiencesData.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            subtitle={experience.subtitle}
            content={experience.content}
            timePeriod={experience.timePeriod}
          />
        ))}
        <ExperienceCard
          centeredContent={
            "Lets see if we can make something awesome together!"
          }
        />
      </div>
    </div>
  );
}
