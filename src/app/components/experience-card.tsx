import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export type ExperienceCardProps = {
  subtitle?: string;
  title?: string;
  content?: string;
  timePeriod?: string;
  centeredContent?: string;
};

export const ExperienceCard = (props: ExperienceCardProps) => {
  const { subtitle, title, content, timePeriod, centeredContent } = props;
  const hasCenteredContent = centeredContent ? true : false;
  return (
    <Card
      className={`${
        hasCenteredContent && "bg-orange hidden md:flex"
      } max-w-[340px] border-none shadow-md p-2 rounded-xl`}
    >
      <CardHeader className="justify-between">
        <div className="flex flex-col gap-1 items-start justify-center">
          <h3 className="text-medium md:text-screenMedium text-orange font-semibold">
            {title}
          </h3>
          <h4 className="font-semibold">{subtitle}</h4>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small md:text-screenSmall">
        <p>{content}</p>
      </CardBody>
      <CardBody className="px-3 py-0 text-medium text-white">
        <p>{centeredContent}</p>
      </CardBody>
      <CardFooter>
        <p className="text-orange font-semibold">{timePeriod}</p>
      </CardFooter>
    </Card>
  );
};
