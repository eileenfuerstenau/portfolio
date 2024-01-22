import { Button } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import { ButtonComponent } from "../components/button-component";

function Footer() {
  return (
    <>
      <div className="bg-black flex w-full flex-col justify-center items-center px-4 pt-6 max-md:max-w-full max-md:px-5">
        <header className="text-isLarge text-white mb-5 text-center font-semibold tracking-tight">
          Contact Me
        </header>
        <p className="text-medium text-white text-center font-light tracking-tight self-stretch max-md:max-w-full max-md:mt-10">
          If my words or work have inspired you in any way, feel free to reach
          out. <br /> I&apos;m always open to new experiences, learning, and
          creating, <br /> whether it&apos;s discovering new places, meeting new
          people, or finding new energy.
        </p>
        <ButtonComponent
          linkUrl="https://github.com/eileenfuerstenau"
          variant={"bordered"}
          startContent={
            <Image src={"githubIcon.svg"} width={20} height={20} alt="Icon" />
          }
          buttonText="Follow me on GitHub"
        />
        <Divider className="bg-white w-11/12" />
      </div>
      <div className="bg-black sm:sticky bottom-0 z-10 flex justify-center w-full">
        <div className="flex justify-around w-11/12 items-center">
          <p className="py-5 text-medium text-white">Lets connect!</p>
          <ButtonComponent
            linkUrl="https://www.linkedin.com/in/eileen-f%C3%BCrstenau-profile/"
            variant="solid"
            endContent={
              <Image src={"arrowIcon.svg"} width={20} height={20} alt="Icon" />
            }
            buttonText="Reach out"
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
