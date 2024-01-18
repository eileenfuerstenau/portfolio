import React from "react";

function AboutMe() {
  return (
    <div className="bg-gray-100 flex w-full flex-col justify-center items-center px-4 py-6 max-md:max-w-full max-md:px-5">
      <header className="text-orange-500 mb-5 text-center text-4xl sm:text-2xl font-semibold tracking-tight whitespace-nowrap">
        About Me
      </header>
      <div className="text-black text-center text-3xl sm:text-xl font-light tracking-tight self-stretch max-md:max-w-full max-md:mt-10">
        <span className="font-light">
          My name is Eileen and I am a creative and determined{" "}
        </span>
        <span className="font-semibold">web developer</span>
        <span className="font-light">
          . I thrive on turning imaginative concepts into digital realities,
          constantly seeking innovative ways to blend design and technology.
          I&apos;m passionate about{" "}
        </span>
        <span className="font-semibold">agile methods</span>
        <span className="font-bold"> </span>
        <span className="font-light">
          and fostering functional project teams. My technological focus lies in{" "}
        </span>
        <span className="font-semibold">frontend development</span>
        <span className="font-light">
          , with a keen eye for user-centered interfaces and accessibility.{" "}
        </span>
      </div>
    </div>
  );
}

export default AboutMe;
