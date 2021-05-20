import IonIcon from "@reacticons/ionicons";
import * as React from "react";
import Layout from "../../components/layout";
import ButtonAnchor from "../../components/buttons/buttonanchor";
import JSONData from "../../../content/work.json";
import { ReactComponent as HeroImage } from "../../images/hero-work.svg";

const WorkIndex = () => {
  const dateFmt = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  // Compare the lastUpdated property so projects can be sorted in most recently updated first.
  const compareFn = (a, b) => {
    const dateA = new Date(a?.lastUpdated);
    const dateB = new Date(b?.lastUpdated);

    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    return 0;
  };

  return (
    <Layout pageTitle="Work">
      <section className="md:flex items-center">
        <article className="max-w-3xl md:w-2/3 mb-16 md:mb-0 md:mr-16 ">
          <h2 className="text-4xl md:text-5xl text-center md:text-left font-medium mb-6">
            Explore my <strong>work</strong>
          </h2>
          <p className="md:text-xl text-center md:text-left leading-relaxed mb-4">
            Below you will find a collection of noteworthy projects I have
            created over the last six years or so. Some are rudimentary others
            are more complex. These projects include assignment builds,
            freelance projects, course projects, and personal projects.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <ButtonAnchor
              className="w-full md:w-auto"
              href="mailto:hello@jenewland.me.uk"
              icon={<IonIcon name="mail" />}
              text="Contact Me"
              isExternal
            />
            <ButtonAnchor
              className="w-full md:w-auto"
              href="https://github.com/jenewland1999"
              icon={<IonIcon name="logo-github" />}
              text="View GitHub"
              variant="secondary"
              isExternal
            />
          </div>
        </article>
        <figure className="w-full md:w-1/3">
          <HeroImage className="block h-full w-full" />
        </figure>
      </section>
      <section className="my-28">
        <ul className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:grid-flow-row-dense">
          {JSONData.work
            .sort(compareFn)
            .map(
              (
                {
                  featured,
                  name,
                  description,
                  lastUpdated,
                  demoLink,
                  githubLink,
                },
                id
              ) => (
                <li
                  key={id}
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
              )
            )}
        </ul>
      </section>
    </Layout>
  );
};

export default WorkIndex;
