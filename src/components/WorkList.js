import * as React from "react";

const WorkList = ({ children, ...props }) => {
  return (
    <ul className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:grid-flow-row-dense">
      {children}
    </ul>
  );
};

export default WorkList;
