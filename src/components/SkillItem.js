import * as React from "react";

const SkillItem = ({ name }) => {
  return (
    <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg dark:bg-slate-700 dark:text-slate-300">
      {name}
    </li>
  );
};

export default SkillItem;
