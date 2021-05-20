import * as React from "react";
import ButtonAnchor from "@components/ButtonAnchor";
import Emoji from "@components/Emoji";
import Layout from "@components/Layout";
import { ReactComponent as HeroImage } from "@images/hero-home.svg";

const IndexPage = () => {
  return (
    <Layout>
      <section className="h-full flex-grow flex flex-col lg:flex-row items-center justify-center">
        <article className=" mb-16 md:max-w-3xl lg:mb-0 lg:mr-16">
          <h2 className="font-medium leading-tight mb-6 text-[2.1rem] md:leading-tight md:text-5xl">
            Hello <Emoji emoji="👋🏻" isDecorative />. I'm Jordan, <br />a{" "}
            <strong>UI/UX Designer</strong> &amp;{" "}
            <strong>Front-end Developer</strong> based in the{" "}
            <strong>UK</strong>.
          </h2>
          <p className="md:text-lg max-w-prose mb-6">
            Soon-to-be graduate with a first-class honours degree in software
            engineering, I'm eagerly seeking out the right opportunity in which
            to put my creativity and passion for the field to good use.
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
        <HeroImage className="w-full h-full md:order-first md:mb-24 lg:order-none lg:mb-0" />
      </section>
    </Layout>
  );
};

export default IndexPage;
