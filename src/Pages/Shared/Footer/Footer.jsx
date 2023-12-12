import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-black footer footer-center p-10 bg-base-200 rounded-xl">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/mamunpr9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/mamun-prodhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="w-8 h-8" />
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
      <div>
        <p>Copyright © 2023 - All right reserved by Mamun Prodhan</p>
      </div>
    </footer>
  );
};

export default Footer;
