import React from "react";
import { Link } from "react-router-dom";
import navStyles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className="bg-green-700 text-gray-100 font-roboto-condensed">
      <div className="container flex justify-between items-center p-8 mx-auto ">
        <h1 className=" text-2xl md:text-4xl uppercase w-1/2 text-white font-permanent-marker z-10">
          <Link to="/">Landscape</Link>
        </h1>
        <ul className="flex w-1/2 justify-around md:justify-center items-center uppercase z-10">
          <Link to="/contact" className="md:px-12">
            Contact
          </Link>
          <Link to="/projects" className="md:px-12">
            Projects
          </Link>
        </ul>
      </div>

      <div className={navStyles.curve}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className={navStyles.shapefill}
          ></path>
        </svg>
      </div>
    </nav>
  );
}
