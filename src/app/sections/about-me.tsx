import React from "react";

function AboutMe() {
  return (
    <div className="bg-gray-100 flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
      <header className="text-orange-500 text-center text-4xl font-semibold leading-9 tracking-tight whitespace-nowrap">
        About Me
      </header>
      <div className="text-black text-center text-4xl font-light leading-10 tracking-tight self-stretch mt-12 max-md:max-w-full max-md:mt-10">
        <span className="font-light">
          Hey there, I'm Eileen, a creative and determined{" "}
        </span>
        <span className="font-semibold">web developer</span>
        <span className="font-light">
          . I thrive on turning imaginative concepts into digital realities,
          constantly seeking innovative ways to blend design and technology. I'm
          passionate about{" "}
        </span>
        <span className="font-semibold">agile methods</span>
        <span className="font-bold"> </span>
        <span className="font-light">
          and fostering functional project teams. My technological focus lies in{" "}
        </span>
        <span className="font-semibold">frontend development</span>
        <span className="font-light">
          , with a keen eye for user-centered interfaces and accessibility{" "}
        </span>
      </div>
    </div>
  );
}

export default AboutMe;
