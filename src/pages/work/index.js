import * as React from "react";
import IonIcon from "@reacticons/ionicons";

import JSONData from "@content/work.json";

import ButtonAnchor from "@components/ButtonAnchor";
import Layout from "@components/Layout";
import { ReactComponent as HeroImage } from "@images/hero-work.svg";
import WorkItem from "@components/WorkItem";
import WorkList from "@components/WorkList";

const WorkIndex = () => {
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
        <WorkList>
          {JSONData.work.sort(compareFn).map((work, id) => (
            <React.Fragment key={id}>
              <WorkItem work={work} />
            </React.Fragment>
          ))}
        </WorkList>
      </section>
    </Layout>
  );
};

export default WorkIndex;
