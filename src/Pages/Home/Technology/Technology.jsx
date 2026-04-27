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

const Technology = () => {
  return (
    <div className="text-black hero bg-base-200 mt-8 md:mt-10 lg:mt-16 mb-16 md:p-8 sm:text-center md:text-center lg:text-left rounded-xl">
      <div className="hero-content flex-col gap-10 lg:gap-16 lg:flex-row-reverse justify-center items-center">
        <img className="rounded-lg shadow-2xl" src={image14} alt="" />
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Fully Compatible With
          </h1>
          <p>Passionate web developer who loves exploring modern technologies and building scalable applications.</p>
          <div className="grid grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center mt-12">
            <img src={htmlImg} alt="html" />
            <img src={cssImg} alt="css" />
            <img src={jsImg} alt="" />
            <img src={bootstrapImg} alt="" />
            <img src={tailwindImg} alt="" />
            <img src={reactImg} alt="" />
            <img src={nodeImg} alt="" />
            <img src={mongoImg} alt="" />
            <img src={expressImg} alt="" />
            <img src={firebaseImg} alt="" />
            <img src={typescriptImg} alt="" />
            <img src={githubImg} alt="" />
            <img src={figmaImg} alt="" />
            <img src={illustratorImg} alt="" />
            <img src={photoshopImg} alt="" />
            <img src={capcutImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
