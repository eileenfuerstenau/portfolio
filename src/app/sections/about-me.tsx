import React from "react";

function AboutMe() {
  return (
    <div className="bg-gray-100 flex w-full flex-col justify-center items-center px-4 py-6 max-md:max-w-full max-md:px-5">
      <header className="text-isLarge md:text-screenLarge mb-5 text-center font-semibold tracking-tight">
        About Me
      </header>
      <p className="text-black text-center font-light tracking-tight self-stretch max-md:max-w-full max-md:mt-10">
        <span>My name is Eileen and I am a creative and determined </span>
        <span className="font-semibold">web developer</span>
        <span>
          . I thrive on turning imaginative concepts into digital realities,
          constantly seeking innovative ways to blend design and technology.
          I&apos;m passionate about{" "}
        </span>
        <span className="font-semibold">agile methods</span>{" "}
        <span>
          and fostering functional project teams. My technological focus lies in{" "}
        </span>
        <span className="font-semibold">frontend development</span>
        <span> with a keen eye for user-centered interfaces. </span>
      </p>
    </div>
  );
}

export default AboutMe;
