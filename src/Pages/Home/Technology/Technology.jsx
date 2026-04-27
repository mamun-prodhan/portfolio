import React from "react";
import htmlImg from "../../../assets/technology/html.png";
import cssImg from "../../../assets/technology/css.avif";
import jsImg from "../../../assets/technology/js.png";
import bootstrapImg from "../../../assets/technology/bootstrap.png";
import tailwindImg from "../../../assets/technology/tailwind.png";
import reactImg from "../../../assets/technology/react.png";
import nodeImg from "../../../assets/technology/node.png";
import mongoImg from "../../../assets/technology/mongo.png";
import expressImg from "../../../assets/technology/express.png";
import firebaseImg from "../../../assets/technology/firebase.png";
import figmaImg from "../../../assets/technology/figma.png";
import illustratorImg from "../../../assets/technology/illustrator.png";
import photoshopImg from "../../../assets/technology/photoshop.png";
import typescriptImg from "../../../assets/technology/typescript.png";
import githubImg from "../../../assets/technology/github.png";
import capcutImg from "../../../assets/technology/capcut.png";
import image14 from "../../../assets/img/giphy.gif";

const technologies = [
  { src: htmlImg, alt: "HTML" },
  { src: cssImg, alt: "CSS" },
  { src: bootstrapImg, alt: "Bootstrap" },
  { src: tailwindImg, alt: "Tailwind" },
  { src: jsImg, alt: "JavaScript" },
  { src: typescriptImg, alt: "TypeScript" },
  { src: reactImg, alt: "React" },
  { src: nodeImg, alt: "Node.js" },
  { src: mongoImg, alt: "MongoDB" },
  { src: expressImg, alt: "Express.js" },
  { src: firebaseImg, alt: "Firebase" },
  { src: githubImg, alt: "GitHub" },
  { src: figmaImg, alt: "Figma" },
  { src: illustratorImg, alt: "Illustrator" },
  { src: photoshopImg, alt: "Photoshop" },
  { src: capcutImg, alt: "CapCut" },
];

const Technology = () => {
  return (
    <div className="text-black hero bg-base-200 mt-8 md:mt-10 lg:mt-16 mb-16 md:p-8 sm:text-center md:text-center lg:text-left rounded-xl">
      <div className="hero-content flex-col gap-10 lg:gap-16 lg:flex-row-reverse justify-center items-center">
        
        <img
          className="rounded-lg shadow-2xl"
          src={image14}
          alt="Technology animation"
          loading="lazy"
        />

        <div>
          <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            Fully Compatible With
          </h1>

          <p>
            Passionate web developer who loves exploring modern technologies and building scalable applications.
          </p>

          <div className="grid grid-cols-4 md:grid-cols-8  lg:grid-cols-4 xl:grid-cols-8 gap-4 justify-items-center mt-12">
            {technologies.map((tech, index) => (
              <img
                key={index}
                src={tech.src}
                alt={tech.alt}
                loading="lazy"
                className="bg-white p-2 shadow-sm hover:shadow-md duration-200 rounded-xl h-16 w-16 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;