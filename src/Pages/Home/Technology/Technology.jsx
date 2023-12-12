import React from "react";
import image1 from "../../../assets/img/Html.png";
import image2 from "../../../assets/img/css.png";
import image3 from "../../../assets/img/js.png";
import image4 from "../../../assets/img/bootstrap.png";
import image5 from "../../../assets/img/tailwind.png";
import image6 from "../../../assets/img/react.png";
import image7 from "../../../assets/img/node.png";
import image8 from "../../../assets/img/mongo.png";
import image9 from "../../../assets/img/express.png";
import image10 from "../../../assets/img/firebase.png";
import image11 from "../../../assets/img/figma.png";
import image12 from "../../../assets/img/illustrator.png";
import image13 from "../../../assets/img/photoshop.png";
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
          <p>Passionate Web Developer who wants to explore every tech stack.</p>
          <div className="grid grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center mt-12">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
            <img src={image7} alt="" />
            <img src={image8} alt="" />
            <img src={image9} alt="" />
            <img src={image10} alt="" />
            <img src={image11} alt="" />
            <img src={image12} alt="" />
            <img src={image13} alt="" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png"
              alt=""
            />
            <img
              src="https://img.utdstc.com/icon/e97/dc9/e97dc9b633c51a67c980727197b0fa1e88087132e2edf4f63c99be65e4fba2b9:200"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
