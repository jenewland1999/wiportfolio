import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Link } from "gatsby";
import ButtonAnchor from "./buttons/buttonanchor";

const Nav = ({ isOpen }) => {
  const cl = ctl(`
    font-medium
    w-full
    md:flex
    md:items-center
    md:space-x-8
    md:w-auto
    ${isOpen ? "block" : "hidden"}
  `);
  return (
    <nav className={cl}>
      <Link
        className="block w-full py-4 text-lg md:text-base md:p-0 md:w-auto transition-colors hover:text-purple-700"
        to="/about"
      >
        About
      </Link>
      <Link
        className="block w-full py-4 text-lg md:text-base md:p-0 md:w-auto transition-colors hover:text-purple-700"
        to="/work"
      >
        Work
      </Link>
      <ButtonAnchor
        className="w-full mt-4 md:w-auto md:mt-0"
        href="mailto:hello@jenewland.me.uk"
        text="Contact Me"
        isExternal
        isLarge
      />
    </nav>
  );
};

export default Nav;
