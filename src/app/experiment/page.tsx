import JobCard from "../components/job-card";
import AboutMe from "../sections/about-me";
import Contact from "../sections/contact";
import Experience from "../sections/experience";
import Header from "../sections/header";
import Headline from "../sections/headline";
import Joke from "../sections/joke";
import Projects from "../sections/projects";
import Skills from "../sections/skills";

export default function Experiment() {
  return (
    <>
      <Header />
      <Headline />
      <AboutMe />
      <Skills />
      <Projects />
      <Joke />
      <Experience />
      <JobCard />
      <Contact />
    </>
  );
}
