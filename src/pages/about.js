import Layout from "@components/Layout";
import SkillItem from "@components/SkillItem";
import SkillList from "@components/SkillList";
import StatItem from "@components/StatItem";
import StatList from "@components/StatList";
import SkillsJSON from "@content/skills.json";
import StatsJSON from "@content/stats.json";
import { ReactComponent as Avatar } from "@images/hero-about.svg";
import IonIcon from "@reacticons/ionicons";
import * as React from "react";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <section className="lg:flex lg:items-center mb-14 lg:my-28">
        <figure className="w-3/4 lg:w-1/3 mx-auto mb-16 lg:mb-0 lg:mr-16">
          <Avatar className="block h-full w-full max-w-80" />
        </figure>
        <article className="lg:w-2/3 max-w-3xl mx-auto px-4">
          <h2 className="font-medium text-4xl md:text-5xl text-center mb-6 lg:text-left">
            About <strong>me</strong>, <strong>myself</strong>, and{" "}
            <strong>I</strong>
          </h2>
          <p className="md:text-xl text-center leading-relaxed mb-10 lg:text-left">
            Creatively-minded, award-winning, and soon-to-be a software engineer
            graduate, I have a deep desire to excel and continuously improve in
            my work. Captivated by UI/UX design and web development, I'm excited
            for the journey that lies ahead. Learn more about my journey so far
            below.
          </p>
          <StatList>
            {StatsJSON.stats.map(({ icon, text }, id) => (
              <React.Fragment key={id}>
                <StatItem icon={<IonIcon name={icon} />} text={text} />
              </React.Fragment>
            ))}
          </StatList>
        </article>
      </section>
      <section className="my-14 md:my-28">
        <h3 className="font-medium text-4xl md:text-5xl text-center mb-6">
          The <strong>skills</strong> I have to offer
        </h3>
        <p className="md:text-xl leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          Learning is great! For the best part of seven years, I have developed
          and honed the following skill set both in and outside of education. I
          have taken various online courses, participated in workshops, and read
          countless tutorials.
        </p>
        <SkillList>
          {SkillsJSON.skills.map(({ name }, id) => (
            <React.Fragment key={id}>
              <SkillItem name={name} />
            </React.Fragment>
          ))}
        </SkillList>
      </section>
    </Layout>
  );
};

export default AboutPage;
