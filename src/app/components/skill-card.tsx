import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

export type SkillCardProps = {
  iconDescription: string;
  title: string;
  content: string;
};

export const SkillCard = (props: SkillCardProps) => {
  const { iconDescription, title, content } = props;
  return (
    <Card className="max-w-[340px] border-none shadow-md p-2 rounded-xl">
      <CardHeader className="justify-between">
        <div className="flex flex-col gap-5 sm:w-full sm:items-center">
          <Image
            src={`${iconDescription}Icon.svg`}
            width={30}
            height={30}
            alt={`${iconDescription} Icon`}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-medium font-semibold">{title}</h4>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small">
        <p>{content}</p>
      </CardBody>
    </Card>
  );
};
