import * as React from "react";

const StatList = ({ children, ...props }) => {
  return (
    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-10">
      {children}
    </dl>
  );
};

export default StatList;
