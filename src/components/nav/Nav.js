import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-gradient-to-r from-green-800 to-green-700 text-gray-100 font-roboto-condensed">
      <div className="container flex justify-between items-center p-8 mx-auto">
        <h1 className="text-3xl uppercase w-1/2 text-white font-permanent-marker">
          <Link to="/">Landscape</Link>
        </h1>
        <ul className="flex w-1/2 justify-around md:justify-center items-center uppercase">
          <Link to="/contact" className="md:px-12">
            Contact
          </Link>
          <Link to="/projects" className="md:px-12">
            Projects
          </Link>
        </ul>
      </div>
    </nav>
  );
}
