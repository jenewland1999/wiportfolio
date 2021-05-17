import IonIcon from "@reacticons/ionicons";
import * as React from "react";
import Layout from "../../components/layout";
import JSONData from "../../../content/work.json";
import { ReactComponent as HeroImage } from "../../images/hero-work.svg";

const WorkIndex = () => {
  const dtFormatter = new Intl.DateTimeFormat("en-GB", {
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
      <section className="flex items-center my-28">
        <article className="max-w-3xl mr-16">
          <h2 className="text-5xl font-medium mb-6">
            Explore my <strong>work</strong>
          </h2>
          <p className="text-xl leading-relaxed mb-4">
            Below you will find a collection of noteworthy projects I have
            created over the last six years or so. Some are rudimentary others
            are more complex. These projects include assignment builds,
            freelance projects, course projects, and personal projects.
          </p>
          <div className="space-x-4">
            <a
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-lg text-white bg-gradient-to-r align-middle from-purple-800 to-purple-500 hover:opacity-80 focus:opacity-80 outline-none transition-opacity"
              href="mailto:hello@jenewland.me.uk"
            >
              contact me
            </a>
            <a
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md align-middle shadow bg-white font-medium text-lg transition-shadow outline-none hover:shadow-lg focus:shadow-lg"
              href="https://github.com/jenewland1999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IonIcon name="logo-github" className="mr-2" /> GitHub
            </a>
          </div>
        </article>
        <HeroImage className="w-full h-full" />
      </section>
      <section className="my-28">
        <ul className="grid grid-cols-3 gap-6 grid-flow-row-dense">
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
                        {dtFormatter.format(new Date(lastUpdated))}
                      </time>
                    </span>
                  </p>
                  <h3 className="font-medium mb-6 text-xl">{name}</h3>
                  <p className="mb-6">{description}</p>
                  <div className="space-x-4 mt-auto">
                    {demoLink && (
                      <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-lg text-white bg-gradient-to-r align-middle from-purple-800 to-purple-500 hover:opacity-80 focus:opacity-80 outline-none transition-opacity"
                      >
                        <IonIcon name="open-outline" />
                        <span className="ml-2">demo/live site</span>
                      </a>
                    )}
                    {githubLink && (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md align-middle shadow bg-white font-medium text-lg transition-shadow outline-none hover:shadow-lg focus:shadow-lg"
                      >
                        <IonIcon name="logo-github" />
                        <span className="ml-2">GitHub</span>
                      </a>
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
