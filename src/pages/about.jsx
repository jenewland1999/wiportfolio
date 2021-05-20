import * as React from "react";
import Layout from "../components/layout";
import { ReactComponent as Avatar } from "../images/hero-about.svg";
import IonIcon from "@reacticons/ionicons";

const AboutPage = () => {
  // Calculate the number of days between now and 23 Jun 2021 (aka grad date)
  const daysRemaining = Math.round(
    (new Date("2021-06-23T23:59:59") - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <Layout pageTitle="About">
      <section className="lg:flex lg:items-center mb-14 lg:my-28">
        <figure className="w-3/4 lg:w-1/3 mx-auto mb-16 lg:mb-0 lg:mr-16">
          <Avatar className="block h-full w-full max-w-80" />
        </figure>
        <article className="lg:w-2/3 max-w-3xl">
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
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-10">
            <div>
              <dt className="text-4xl text-purple-600">
                <IonIcon name="cafe" />
              </dt>
              <dd>
                Some 2,500+ cups of tea have been consumed since starting
                university in September 2018.
              </dd>
            </div>
            <div className="">
              <dt className="text-4xl text-purple-600">
                <IonIcon name="trophy" />
              </dt>
              <dd>
                Recipient of{" "}
                <abbr title="Her Majesty's Government Communications Centre">
                  HMGCC
                </abbr>{" "}
                Best Group Project Award 2020.
              </dd>
            </div>
            <div className="">
              <dt className="text-4xl text-purple-600">
                <IonIcon name="ribbon" />
              </dt>
              <dd>
                Only first-year student to win the annual Barclaycard Challenge
                event.
              </dd>
            </div>
            <div className="">
              <dt className="text-4xl text-purple-600">
                <IonIcon name="calendar" />
              </dt>
              <dd>
                Attended 16+ events, talks, and workshops since January 2020.
              </dd>
            </div>
          </dl>
        </article>
      </section>
      <section className="my-14 md:my-28">
        <h3 className="font-medium text-4xl md:text-5xl text-center mb-6">
          The <strong>skills</strong> I have to offer
        </h3>
        <p className="md:text-xl leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          Learning is great! For the best part of six years, I have developed
          and honed the following skill set both in and outside of education. I
          have taken various online courses, participated in workshops, and read
          countless tutorials.
        </p>
        <ul className="flex flex-wrap gap-4 items-center justify-center">
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            UI Design
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            UX Design
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            Prototyping
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            Wireframing
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            Branding
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            HTML/CSS
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            User Research
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            User Interviews
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            Leadership
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            Adobe Suite
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            Git
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            JavaScript
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            AWS
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            PHP
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            Node.js
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            SQL / NoSQL
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            Java
          </li>
          <li className="whitespace-nowrap w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow bg-white font-medium text-center text-lg">
            Bootstrap
          </li>
        </ul>
      </section>
      <section className="my-14 md:my-28">
        <h3 className="text-4xl md:text-5xl font-medium mb-6 text-center">
          Time <strong>remaining</strong> until <strong>graduation</strong>
        </h3>
        <p className="md:text-xl leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          University has been by far the most challenging task I've taken on -
          especially in the midst of COVID-19. It has been fun, but I'm now
          looking forward to the next part of my journey.
        </p>
        <div className="relative h-6 mb-6">
          <span className="block bg-gray-400 absolute top-0 text-center rounded w-full ">
            &nbsp;
          </span>
          <span className="block bg-purple-800 text-white absolute top-0 text-center rounded-r w-[32.33%] left-2/3 ">
            Year 3
          </span>
          <span className="block bg-purple-700 text-white absolute top-0 text-center w-[33.33%] left-1/3 ">
            Year 2
          </span>
          <span className="block bg-purple-600 text-white absolute top-0 text-center rounded-l w-[33.33%] left-0">
            Year 1
          </span>
        </div>
        <p className="font-medium text-lg text-center">
          {daysRemaining} days remaining
        </p>
      </section>
    </Layout>
  );
};

export default AboutPage;
