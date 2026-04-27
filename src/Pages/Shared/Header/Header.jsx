import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link  className="text-[#570DF8] font-medium" to="home" smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link className="text-[#570DF8] font-medium" to="skills" smooth={true} duration={1000}>
          My Skills
        </Link>
      </li>
      <li>
        <Link className="text-[#570DF8] font-medium" to="projects" smooth={true} duration={1000}>
          Projects
        </Link>
      </li>
      <li>
        <Link className="text-[#570DF8] font-medium" to="contact" smooth={true} duration={1500}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar px-0 bg-base-100 sticky top-0 z-50 bg-white/60 backdrop-blur">
      <div className="flex items-center justify-between max-w-[1280px] px-0 md:px-5 mx-auto w-full">
        <div className="navbar-start z-[1000] flex items-center w-full">
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
          <Link to="home" smooth={true} duration={500} className="font-semibold cursor-pointer text-black normal-case text-xl">
            Mamun Prodhan
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end hidden lg:flex items-center justify-end">
          <a className="text-[#570DF8]  font-medium py-2 px-4 rounded-md border border-transparent hover:border-[#747bff] duration-200" href="https://drive.google.com/uc?id=1XHLpgREdi-UeIWDCt-7EN9CB5rzPl1LV">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
