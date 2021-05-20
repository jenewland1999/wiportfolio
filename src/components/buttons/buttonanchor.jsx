import * as React from "react";
import ctl from "@netlify/classnames-template-literals";

const InternalAnchor = ({ text, ...props }) => <a {...props}>{text}</a>;

const ExternalAnchor = ({ text, ...props }) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

const ButtonAnchor = ({
  className,
  href,
  text,
  variant = "primary",
  isExternal,
  isLarge,
  isBlock,
}) => {
  const buttonAnchorClasses = ctl(`
    border
    border-transparent
    font-medium
    inline-flex
    items-center
    justify-center
    outline-none
    ${isBlock ? "w-full" : ""}
    ${isLarge ? "px-6 py-3" : "px-4 py-2"}
    rounded-md
    whitespace-nowrap
    ${
      variant === "primary" &&
      "bg-gradient-to-r from-purple-800 to-purple-500 shadow-sm text-white transition-opacity hover:opacity-80 focus:opacity-80"
    }
    ${
      variant === "secondary" &&
      "bg-white shadow transition-shadow hover:shadow-lg focus:shadow-lg"
    }
    ${className}
  `);

  return (
    <>
      {isExternal ? (
        <ExternalAnchor
          className={buttonAnchorClasses}
          href={href}
          text={text}
        />
      ) : (
        <InternalAnchor
          className={buttonAnchorClasses}
          href={href}
          text={text}
        />
      )}
    </>
  );
};

export default ButtonAnchor;
