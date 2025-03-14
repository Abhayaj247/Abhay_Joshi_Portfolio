import { useState } from "react";
import logo from "../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-white text-lg font-bold">
          <img src={logo} alt="Logo" className="mx-2 rounded-[50%]" width={50} height={33} />
        </div>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links (hidden on small screens by default) */}
        <ul
          className={`md:flex md:items-center md:gap-8 ${
            isOpen ? "block" : "hidden"
          } absolute md:static bg-[#2f2e31] md:bg-transparent md:w-auto right-0 md:right-auto top-16 md:top-auto p-2 mr-1 md:p-0 text-center md:text-left rounded-xl`}
        >
          <li className="md:bg-zinc-800 md:text-white md:px-3 md:rounded-md md:hover:bg-zinc-900 md:outline-none">
            <a
              href="#projects"
              className="text-lg block rounded-md md:inline mb-2"
            >
              Projects
            </a>
          </li>
          <li className="md:bg-zinc-800 md:text-white md:px-3 md:rounded-md md:hover:bg-zinc-900 md:outline-none">
            <a
              href="#technologies"
              className="text-lg block md:inline mb-2"
            >
              Technologies
            </a>
          </li>
          <li className="md:bg-zinc-800 md:text-white md:px-3 md:rounded-md md:hover:bg-zinc-900 md:outline-none">
            <a
              href="#experience"
              className="text-lg block md:inline mb-2"
            >
              Experience
            </a>
          </li>
          <li className="md:bg-zinc-800 md:text-white md:px-3 md:rounded-md md:hover:bg-zinc-900 md:outline-none">
            <a
              href="#contact"
              className="text-lg block md:inline mb-2"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
