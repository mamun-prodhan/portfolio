import React from "react";
import MyProjects from "../../MyProjects/MyProjects";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
// import Skills from "../Skills/Skills";
import Technology from "../Technology/Technology";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div>
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

      <Element name="contact">
        <Contact></Contact>
      </Element>
    </div>
  );
};

export default Home;
