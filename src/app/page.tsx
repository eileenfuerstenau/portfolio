import AboutMe from "./sections/about-me";
import Header from "./sections/header";
import Headline from "./sections/headline";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import WorkExperience from "./sections/work-experience";
import LifeExperience from "./sections/life-experience";
import Footer from "./sections/footer";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Header />
      <Headline />
      <AboutMe />
      <Skills />
      <Projects />
      <WorkExperience />
      <Divider className="sm:mt-4 w-11/12 " />
      <LifeExperience />
      <Footer />
    </>
  );
}
