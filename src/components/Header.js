import Nav from "@components/Nav";
import IonIcon from "@reacticons/ionicons";
import { Link } from "gatsby";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mt-6 px-4 sm:px-6 flex flex-wrap items-center justify-between">
      <h1 className="font-semibold text-xl tracking-wide">
        <Link to="/" className="hover:text-violet-700 transition-colors">
          jenew.land
        </Link>{" "}
        <span role="img" aria-hidden="true">
          🏳️‍🌈
        </span>
      </h1>
      <button
        className="md:hidden inline-flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IonIcon
          name="menu-outline"
          className="text-5xl leading-none hover:text-violet-700 focus:text-violet-700 transition-colors"
          role="img"
          aria-label="Toggle menu"
        />
      </button>
      <Nav isOpen={isOpen} />
    </header>
  );
};

export default Header;
