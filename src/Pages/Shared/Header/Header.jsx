import React from "react";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={1000}>
          My Skills
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={1000}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={1500}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start z-[1000]">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost text-black normal-case text-xl">
          Mamun Prodhan
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end hidden lg:inline-block">
        <a href="https://drive.google.com/uc?id=1XHLpgREdi-UeIWDCt-7EN9CB5rzPl1LV">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
