import Image from "next/image";

export default function Headline() {
  return (
    <div className="bg-hero flex-col overflow-hidden relative flex min-h-[250px] sm:min-h-[150px] w-full justify-center items-center max-md:max-w-full max-md:px-5">
      <div className="relative flex flex-col items-stretch md:max-w-full max-md:my-10">
        <div
          className="text-white text-center text-3xl sm:text-xl font-light tracking-tight self-center max-w-[633px] max-md:max-w-full"
          aria-label="Headline Description"
        >
          I am dedicated to crafting digital products <br /> in fast-paced
          teams.
        </div>
        <header
          className="text-white text-center text-6xl sm:text-3xl font-semibold leading-[65px] tracking-tighter self-center max-w-[541px] max-md:max-w-full max-md:text-4xl max-md:leading-10"
          aria-label="Headline Title"
        >
          Let pixels party!
        </header>
      </div>
    </div>
  );
}
