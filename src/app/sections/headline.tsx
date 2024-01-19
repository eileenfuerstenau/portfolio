import Image from "next/image";

export default function Headline() {
  return (
    <div className="bg-hero flex-col overflow-hidden relative flex min-h-[250px] sm:min-h-[150px] w-full justify-center items-center max-md:max-w-full max-md:px-5">
      <div className="relative flex flex-col items-stretch md:max-w-full max-md:my-10">
        <div
          className="text-medium text-white text-center font-light tracking-tight self-center max-w-[633px] max-md:max-w-full"
          aria-label="Headline Description"
        >
          I am dedicated to crafting digital products <br /> in fast-paced
          teams.
        </div>
        <header
          className="text-large text-white text-center text-testing font-semibold tracking-tighter self-center max-w-[541px] max-md:max-w-full max-md:leading-10"
          aria-label="Headline Title"
        >
          Let pixels party!
        </header>
      </div>
    </div>
  );
}
