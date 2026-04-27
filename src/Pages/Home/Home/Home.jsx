import React from "react";
import MyProjects from "../../MyProjects/MyProjects";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
// import Skills from "../Skills/Skills";
import Technology from "../Technology/Technology";
import { Element } from "react-scroll";
import EducationExperience from "../EducationExperience/EducationExperience";

const Home = () => {
  return (
    <div className="max-w-[1280px] w-full mx-auto px-5">
      <Element name="home">
        <Banner></Banner>
      </Element>
      <Element name="skills">
        <Technology></Technology>
      </Element>

      {/* <Skills></Skills> */}
      <Element name="projects">
        <MyProjects></MyProjects>
      </Element>

      {/* Education and Experience */}
      <Element name="experience">
        <EducationExperience></EducationExperience>
      </Element>
      <Element name="contact">
        <Contact></Contact>
      </Element>
    </div>
  );
};

export default Home;
