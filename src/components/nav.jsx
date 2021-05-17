import * as React from "react";
import { Link } from "gatsby";
import ButtonAnchor from "./buttons/buttonanchor";

const Nav = () => {
  return (
    <nav className="flex items-center space-x-8 font-medium">
      <Link className="transition-colors hover:text-purple-700" to="/about">
        about
      </Link>
      <Link className="transition-colors hover:text-purple-700" to="/work">
        work
      </Link>
      <ButtonAnchor
        href="mailto:hello@jenewland.me.uk"
        text="contact me"
        isExternal
        isLarge
      />
    </nav>
  );
};

export default Nav;
