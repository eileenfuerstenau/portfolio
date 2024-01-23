export default function Headline() {
  return (
    <div className="bg-hero flex-col overflow-hidden relative flex min-h-[120px] md:min-h-[160px] w-full justify-center items-center max-md:max-w-full max-md:px-5">
      <div className="relative flex flex-col items-stretch md:max-w-full max-md:my-10">
        <h1 className="hidden">
          Hello! My name is Eileen, I am a Web Developer and this is my personal
          website.
        </h1>
        <p
          className="text-medium md:text-screenMedium text-white text-center font-light tracking-tight self-center max-w-[633px] max-md:max-w-full"
          aria-label="Headline Description"
        >
          I am dedicated to crafting digital products <br /> in fast-paced
          teams.
        </p>
        <p className="hidden">My claim:</p>
        <p
          className="text-xlarge md:text-screenXlarge text-white text-center text-testing font-semibold tracking-tighter self-center max-w-[541px] max-md:max-w-full max-md:leading-10"
          aria-label="Headline Title"
        >
          Let pixels party!
        </p>
      </div>
    </div>
  );
}
