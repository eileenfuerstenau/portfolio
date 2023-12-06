import { Chip } from "@nextui-org/react";
import Image from "next/image";
import { Inline } from "./components/inline";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center relative">
        <Image
          src="/stickerSmall.svg"
          alt="Decorative Sticker"
          height={30}
          width={30}
          aria-hidden="true"
        />
        <Chip color="primary" variant="bordered" className="border-1 px-3">
          Hello!
        </Chip>
        <div className="relative text-center font-bold text-6xl sm:text-5xl">
          <div className="inline-flex gap-2 ">
            I&apos;m
            <div className="flex">
              <p className="text-orange">Eileen</p>,
            </div>
          </div>
          <p>Web Developer</p>
        </div>
        <Inline>
          <Image
            src="/shield.svg"
            alt="Shield Icon"
            height={30}
            width={30}
            aria-hidden="true"
          />
          <p>Certified Problem Solver</p>
        </Inline>
        <Inline>
          <Image
            src="/fastStar.svg"
            alt="Moving Star Icon"
            height={30}
            width={30}
            aria-hidden="true"
          />
          <p>10/10 would recommend</p>
        </Inline>
        <Image
          src="/stickerBig.svg"
          alt="Decorative Sticker"
          height={70}
          width={70}
          aria-hidden="true"
        />
        <div className="max-w-[200px]">
          <Image
            src="/quote.svg"
            alt="Quotation Marks Icon"
            height={30}
            width={30}
            aria-hidden="true"
          />
          <p>Eileen is really cool, and I say that 100% voluntarily</p>
        </div>
        <div className="flex flex-col items-end">
          <Inline>
            <Image
              src="/star.svg"
              alt="StarIcon"
              height={30}
              width={30}
              aria-hidden="true"
            />
            <Image
              src="/star.svg"
              alt="StarIcon"
              height={30}
              width={30}
              aria-hidden="true"
            />
            <Image
              src="/star.svg"
              alt="StarIcon"
              height={30}
              width={30}
              aria-hidden="true"
            />
            <Image
              src="/star.svg"
              alt="StarIcon"
              height={30}
              width={30}
              aria-hidden="true"
            />
            <Image
              src="/star.svg"
              alt="StarIcon"
              height={30}
              width={30}
              aria-hidden="true"
            />
          </Inline>
          <p className="font-extrabold pt-3 text-3xl">6 Years</p>
          <p>Experience</p>
        </div>
        <Inline>
          <Image
            src="/award.svg"
            alt="Award Icon"
            layout="fixed"
            height={30}
            width={30}
            aria-hidden="true"
            className="shrink-0"
          />
          <p>Award winning creativity</p>
        </Inline>
        <Image src="/me.png" alt="Me" height={800} width={800} />
        <Image
          src="/ellipse.svg"
          alt="Half Circle"
          height={500}
          width={500}
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-col items-center relative">test</div>
    </>
  );
}
