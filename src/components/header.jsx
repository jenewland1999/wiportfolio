import * as React from "react";
import { Link } from "gatsby";
import Nav from "./nav";

const Header = () => {
  return (
    <header className="mt-6 px-8 flex items-center justify-between">
      <h1 className="font-semibold text-xl tracking-wide">
        <Link to="/" className="hover:text-purple-700 transition-colors">
          jenew.land
        </Link>{" "}
        <span role="img" aria-hidden="true">
          🏳️‍🌈
        </span>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
