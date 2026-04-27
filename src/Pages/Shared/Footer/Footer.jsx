import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="px-5">
      <div className="text-black footer footer-center p-10 bg-base-200 rounded-xl">
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
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by <span className="font-semibold">Mamun Prodhan</span></p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
