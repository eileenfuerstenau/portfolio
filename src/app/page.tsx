import { Chip } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/stickerSmall.svg"
        alt="Decorative Sticker"
        height={30}
        width={30}
        priority
      />
      <Chip color="primary" variant="bordered" className="border-1 px-3">
        Hello!
      </Chip>
      <div className="text-center">
        <div className="inline-flex gap-2 font-bold text-6xl">
          I&apos;m
          <div className="flex">
            <p className="text-orange">Eileen</p>,
          </div>
        </div>
        <p className="font-bold text-6xl">Web Developer</p>
      </div>
      <Image
        src="/stickerBig.svg"
        alt="Decorative Sticker"
        height={70}
        width={70}
      />
    </div>
  );
}
