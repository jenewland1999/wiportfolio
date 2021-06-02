import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import ButtonAnchor from "./ButtonAnchor";

const skipToContentClasses = ctl(`
  sr-only
  focus:not-sr-only
  focus:mx-4
  focus:my-6
  focus:px-6
  focus:py-3
  lg:transform
  lg:focus:m-0
  lg:focus:top-6
  lg:focus:left-2/4
  lg:focus:absolute
  lg:focus:-translate-x-2/4
`);

const SkipToContent = ({ contentId, label, icon }) => {
  return (
    <ButtonAnchor
      className={skipToContentClasses}
      href={contentId}
      icon={icon}
      text={label}
      variant="secondary"
    />
  );
};

export default SkipToContent;
