import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import image from "../../../assets/myimage.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 my-8 md:my-10 lg:my-16 md:p-8 rounded-xl">
      <div className="hero-content flex-col lg:gap-10 lg:flex-row">
        <img
          src={image}
          alt="Myimage"
          className="z-[-1] mb-8 lg:mb-0 rounded-lg"
        />
        <div className="text-start text-black">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hi, I m Mamun Prodhan
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Front End Web Developer
          </h2>
          <p className="py-6 text-justify">
            I am a Front End Web Developer with an amazing ability to develop
            websites that are both functional and aesthetically pleasing. I have
            a strong understanding of web standards and best practices, and I am
            passionate about creating websites that users will find easy to use
            and visually appearing.
          </p>
          <button className="btn btn-primary">
            <a
              className="text-white"
              href="https://drive.google.com/uc?id=1XHLpgREdi-UeIWDCt-7EN9CB5rzPl1LV"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </button>
          <h3 className="text-2xl mt-4 mb-4 font-bold">Find Me On</h3>
          <div className="flex">
            <a
              href="https://www.facebook.com/mamunpr9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="w-8 h-8 mr-2" />
            </a>
            <a
              href="https://github.com/mamun-prodhan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="w-8 h-8 mr-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/mamunprodhan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>

    // <div className="hero  bg-base-200 mt-32 mb-32">
    //     <div className="hero-content text-center">
    //         <div className="max-w-md">
    //             <h1 className="text-5xl font-bold">Mamun Prodhan</h1>
    //             <h2 className='text-2xl font-bold'>Front-End Web Developer</h2>
    //             <p className="py-6">I am a Front End Web Developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong understanding of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appearing.</p>
    //             <FaFacebookSquare></FaFacebookSquare>
    //             <button className="btn btn-primary">Download Resume</button>
    //         </div>
    //     </div>
    // </div>
  );
};

export default Banner;
