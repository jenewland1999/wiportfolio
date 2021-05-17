import * as React from "react";
import Layout from "../components/layout";
import Emoji from "../components/emoji.jsx";
import { ReactComponent as HeroImage } from "../images/hero-home.svg";
import ButtonAnchor from "../components/buttons/buttonanchor";

const IndexPage = () => {
  return (
    <Layout>
      <section className="h-full flex-grow flex items-center justify-center">
        <article className="max-w-3xl mr-16">
          <h2 className="text-5xl font-medium leading-tight mb-6">
            Hello <Emoji emoji="👋🏻" isDecorative />. I'm Jordan, <br />a{" "}
            <strong>UI/UX Designer</strong> &amp;{" "}
            <strong>Front-end Developer</strong> based in the{" "}
            <strong>UK</strong>.
          </h2>
          <p className="text-lg max-w-prose mb-6">
            Soon-to-be graduate with a first-class honours degree in software
            engineering, I'm eagerly seeking out the right opportunity in which
            to put my creativity and passion for the field to good use.
          </p>
          <div className="space-x-4">
            <ButtonAnchor
              href="mailto:hello@jenewland.me.uk"
              text="contact me"
              isExternal
            />
            <ButtonAnchor
              href="https://cdn.jenewland.me.uk/media/docs/cv_newland-j.pdf"
              text="view résumé"
              variant="secondary"
              isExternal
            />
          </div>
        </article>
        <HeroImage className="w-full h-full" />
      </section>
    </Layout>
  );
};

export default IndexPage;
