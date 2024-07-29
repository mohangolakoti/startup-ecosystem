import React, { useState } from "react";
import logo from "./images/logo3.png";
import { navLinks } from "../../constants";
import hamburger from "./images/hamburger.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="py-2 px-8 sm:px-16 z-10 w-full  bg-gradient-to-r from-blue-600 to-gray-800 absolute">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={logo} width={60} alt="logo" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-14 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg text-white leading-normal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-12 max-lg:hidden">
          <Link to="/signup">
            <button className="text-white">Sign Up</button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#ff5100] px-4 py-2 text-white rounded-lg">
              Join Now
            </button>
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toogleNavbar}>
            {isOpen ? <p>X</p> : <img src={hamburger} width="19" alt="menu" />}
          </button>
        </div>
      </nav>
      <div className="lg:hidden list-none px-2 py-1 w-full">
        {isOpen &&
        <div>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg text-slate-600leading-normal"
              >
                {item.label}
              </a>
            </li>
          ))}
        <div className="flex flex-col gap-2">
          <Link to="/signup">
            <button className="">Sign Up</button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#ff5100] px-4 py-2 mx-[-2px] rounded-lg">
              Join Now
            </button>
          </Link>
        </div>
        </div>}
      </div>
    </header>
  );
};

export default Nav;
