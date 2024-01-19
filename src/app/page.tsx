import AboutMe from "./sections/about-me";
import Header from "./sections/header";
import Headline from "./sections/headline";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import WorkExperience from "./sections/work-experience";
import Image from "next/image";
import LifeExperience from "./sections/life-experience";

export default function Home() {
  return (
    <>
      <Header />
      <Headline />
      <AboutMe />
      <Skills />
      <Projects />
      <Image src={"halloween.svg"} width={10000} height={10000} alt={"joke"} />
      <WorkExperience />
      <Image src={"halloween.svg"} width={10000} height={10000} alt={"joke"} />
      <LifeExperience />
      <Image src={"halloween.svg"} width={10000} height={10000} alt={"joke"} />
    </>
  );
}
