import * as React from "react";

const SkipToContent = ({ contentId, label, icon }) => {
  return (
    <a
      href={contentId}
      className="sr-only inline-flex items-center justify-center top-6 left-2/4 outline-none ring-2 ring-black ring-offset-2 rounded-md shadow-sm transform -translate-x-2/4 bg-black font-medium text-center text-white whitespace-nowrap focus:absolute focus:px-6 focus:py-3 focus:not-sr-only"
    >
      {icon && icon}
      <span className={icon ? "ml-2" : ""}>{label}</span>
    </a>
  );
};

export default SkipToContent;
