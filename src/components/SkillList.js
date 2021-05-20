import * as React from "react";

const SkillList = ({ children, ...props }) => {
  return (
    <ul className="flex flex-wrap gap-4 items-center justify-center">
      {children}
    </ul>
  );
};

export default SkillList;
