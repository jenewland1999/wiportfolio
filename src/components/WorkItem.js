import * as React from "react";
import IonIcon from "@reacticons/ionicons";
import ButtonAnchor from "@components/ButtonAnchor";

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
      className={
        featured
          ? "p-8 bg-white shadow rounded-md flex flex-col col-span-2"
          : "p-8 bg-white shadow rounded-md flex flex-col"
      }
    >
      <p className="inline-flex items-center mb-4 text-sm text-gray-500">
        <IonIcon name="time-outline" />
        <span className="ml-2">
          Last updated{" "}
          <time dateTime={lastUpdated}>
            {dateFmt.format(new Date(lastUpdated))}
          </time>
        </span>
      </p>
      <h3 className="font-medium mb-6 text-xl">{name}</h3>
      <p className="mb-6">{description}</p>
      <div className="mt-auto space-y-4 lg:space-y-0 lg:space-x-4">
        {demoLink && (
          <ButtonAnchor
            className="w-full lg:w-auto"
            href={demoLink}
            icon={<IonIcon name="open-outline" />}
            text="Demo/Live Site"
            isExternal
          />
        )}
        {githubLink && (
          <ButtonAnchor
            className="w-full lg:w-auto"
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
