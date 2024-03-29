"use client";
import { Button, ButtonProps, Link } from "@nextui-org/react";
import React from "react";

export type ButtonComponentProps = {
  variant: ButtonProps["variant"];
  linkUrl: string;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  buttonText: string;
  textColor?: string;
};

export const ButtonComponent = (props: ButtonComponentProps) => {
  const { variant, linkUrl, startContent, endContent, buttonText, textColor } =
    props;
  return (
    <Button
      href={linkUrl}
      as={Link}
      color="secondary"
      className={`${textColor && `text-${textColor}`} my-5`}
      startContent={startContent}
      endContent={endContent}
      variant={variant}
    >
      {buttonText}
    </Button>
  );
};
