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
      <CardHeader className="p-2 justify-between">
        <div className="flex flex-col gap-2 w-full items-center">
          <Image
            src={`/${iconDescription}Icon.svg`}
            width={30}
            height={30}
            alt={`${iconDescription} Icon`}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h3 className="text-medium md:text-screenMedium font-semibold">
              {title}
            </h3>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 text-small md:text-screenSmall">
        <p>{content}</p>
      </CardBody>
    </Card>
  );
};
