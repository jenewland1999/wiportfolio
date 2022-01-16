import ButtonAnchor from "@components/ButtonAnchor";
import ctl from "@netlify/classnames-template-literals";
import IonIcon from "@reacticons/ionicons";
import * as React from "react";

const WorkItem = ({ work }) => {
  const dateFmt = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const { name, description, lastUpdated, demoLink, githubLink, featured } =
    work;

  return (
    <li
      className={ctl(
        `p-8 bg-white dark:bg-slate-800 shadow rounded-md flex flex-col ${
          featured ? "col-span-2" : null
        }`
      )}
    >
      <span className="inline-flex items-center mb-4 text-sm text-slate-600 dark:text-slate-400">
        <IonIcon name="time-outline" />
        <span className="ml-2">
          Last updated{" "}
          <time dateTime={lastUpdated}>
            {dateFmt.format(new Date(lastUpdated))}
          </time>
        </span>
      </span>
      <h3 className="font-medium mb-6 text-xl">{name}</h3>
      <p className="mb-6">{description}</p>
      <div className="mt-auto space-y-4 xl:space-y-0 xl:space-x-4">
        {demoLink && (
          <ButtonAnchor
            className="w-full xl:w-auto"
            href={demoLink}
            icon={<IonIcon name="open-outline" />}
            text="Demo/Live Site"
            isExternal
          />
        )}
        {githubLink && (
          <ButtonAnchor
            className="w-full xl:w-auto"
            href={githubLink}
            icon={<IonIcon name="logo-github" />}
            text="GitHub"
            variant="secondary"
            isExternal
          />
        )}
      </div>
    </li>
  );
};

export default WorkItem;
