import AboutMe from "./sections/about-me";
import Header from "./sections/header";
import Headline from "./sections/headline";
import Skills from "./sections/skills";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <>
      <Header />
      <Headline />
      <AboutMe />
      <Skills />
      <Projects />
      <Skills />
    </>
  );
}
