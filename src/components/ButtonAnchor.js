import ctl from "@netlify/classnames-template-literals";
import * as React from "react";

export const InternalAnchor = ({ icon, text, ...props }) => (
  <a {...props}>
    {icon && icon}
    <span className={icon ? "ml-2" : ""}>{text}</span>
  </a>
);

export const ExternalAnchor = ({ icon, text, ...props }) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {icon && icon}
    <span className={icon ? "ml-2" : ""}>{text}</span>
  </a>
);

const ButtonAnchor = ({
  className,
  href,
  icon,
  text,
  variant = "primary",
  isExternal,
  isLarge,
  isBlock,
}) => {
  const buttonAnchorClasses = ctl(`
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
      "bg-gradient-to-r from-violet-800 to-violet-500 shadow-sm text-white transition-opacity hover:opacity-80 focus:outline-2 focus:outline-offset-4 focus:outline-violet-500"
    }
    ${
      variant === "secondary" &&
      "bg-white shadow transition-shadow hover:shadow-lg focus:shadow-lg dark:bg-slate-700 dark:text-slate-300 dark:hover:opacity-80 focus:outline-2 focus:outline-offset-4 focus:outline-slate-300"
    }
    ${className}
  `);

  return (
    <>
      {isExternal ? (
        <ExternalAnchor
          className={buttonAnchorClasses}
          href={href}
          icon={icon}
          text={text}
        />
      ) : (
        <InternalAnchor
          className={buttonAnchorClasses}
          href={href}
          icon={icon}
          text={text}
        />
      )}
    </>
  );
};

export default ButtonAnchor;
