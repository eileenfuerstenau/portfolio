import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

type ProjectDescription = {
  projectAim: string;
  techStack: string;
  role: string;
  timePeriod: string;
};

export type SkillCardProps = {
  title: string;
  projectDescription: ProjectDescription;
};

export const ProjectCard = (props: SkillCardProps) => {
  const { projectDescription, title } = props;

  return (
    <Card className="max-w-[340px] border-none shadow-md p-3 rounded-xl">
      <div>
        <CardHeader className="justify-between">
          <div className="self-center flex w-[472px] max-w-full items-stretch justify-between gap-5 max-md:flex-wrap">
            <h2 className="text-medium md:text-screenMedium text-black font-bold grow shrink basis-auto">
              {title}
            </h2>
            <Image
              src={"/codingIcon.svg"}
              width={50}
              height={50}
              alt="Coding Icon"
              className="self-start"
            />
          </div>
        </CardHeader>
        <CardBody className="px-3">
          {Object.entries(projectDescription).map(([key, value]) => (
            <div key={key}>
              <div className="text-small md:text-screenSmall font-semibold self-stretch mt-3 max-md:max-w-full">
                <ul>
                  <li className="text-orange">
                    {key
                      .replace(/([a-z])([A-Z])/g, "$1 $2")
                      .trim()
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </li>
                </ul>
              </div>
              <p className="text-gray-400 self-stretch mt-1 max-md:max-w-full">
                {value}
              </p>
            </div>
          ))}
        </CardBody>
      </div>
    </Card>
  );
};
