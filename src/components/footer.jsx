import * as React from "react";
import SocialNav from "./socialnav";

const Footer = () => {
  return (
    <footer className="mb-6 px-8 flex items-center justify-between">
      <SocialNav />
      <p className="text-sm">
        <span className="sr-only">Copyright</span> &copy;{" "}
        {new Date().getFullYear()} Jordan Newland. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
