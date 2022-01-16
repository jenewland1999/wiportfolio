import ButtonAnchor from "@components/ButtonAnchor";
import Emoji from "@components/Emoji";
import Layout from "@components/Layout";
import { ReactComponent as HeroImage } from "@images/hero-home.svg";
import * as React from "react";

const IndexPage = () => {
  return (
    <Layout>
      <section className="h-full w-full md:max-w-3xl lg:max-w-none md:mx-auto flex-grow flex flex-col lg:flex-row items-center justify-center">
        <article className="mb-16 lg:max-w-3xl lg:mb-0 lg:mr-16">
          <h2 className="font-medium leading-tight mb-6 text-[2.1rem] md:leading-tight md:text-5xl">
            Hi, <Emoji emoji="👋🏻" isDecorative /> I'm Jordan, <br />a{" "}
            <strong>UI/UX Designer</strong> &amp;{" "}
            <strong>Front-end Developer</strong> based in the{" "}
            <strong>UK</strong>.
          </h2>
          <p className="md:text-xl max-w-prose mb-6">
            Graduate software engineer keeping London moving at{" "}
            <a
              className="text-violet-600 underline underline-offset-2 hover:no-underline"
              href="http://tfl.gov.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Transport for London
            </a>{" "}
            (TfL). Let's talk about web development and UI/UX design.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <ButtonAnchor
              className="w-full md:w-auto"
              href="mailto:hello@jenewland.me.uk"
              text="Contact Me"
              isExternal
            />
            <ButtonAnchor
              className="w-full md:w-auto"
              href="https://cdn.jenewland.me.uk/media/docs/cv_newland-j.pdf"
              text="View Résumé"
              variant="secondary"
              isExternal
            />
          </div>
        </article>
        <HeroImage className="h-64 w-full order-first sm:mb-6 md:mb-0 md:w-2/4 md:mr-auto lg:w-full lg:order-none" />
      </section>
    </Layout>
  );
};

export default IndexPage;
