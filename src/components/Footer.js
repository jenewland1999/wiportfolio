import * as React from "react";
import SocialNav from "@components/SocialNav";

const Footer = () => {
  return (
    <footer className="mb-6 px-4 sm:px-6 text-center space-y-4 md:space-y-0 md:text-left md:flex items-center justify-between">
      <SocialNav />
      <p className="text-sm">
        <span className="sr-only">Copyright</span> &copy;{" "}
        {new Date().getFullYear()} Jordan Newland. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
