import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import React from "react";
import '../index.css';

export default function Navbar() {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            About
          </a>
        </span>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700    flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
}