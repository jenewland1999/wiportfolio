import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCountUp } from "react-countup"

import Layout from "../components/Layout"
import PageSubtitle from "../components/typography/page-subtitle/PageSubtitle"
import PageTitle from "../components/typography/page-title/PageTitle"
import SEO from "../components/SEO"

import styles from "../styles/pages/about.module.css"

class AboutPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const Counter = props => {
            const { countUp } = useCountUp({ end: props.end })
            return <span className={styles.counter}>{countUp}</span>
        }

        return (
            <Layout>
                <SEO title="About" />
                <section className={styles.page__section}>
                    <div className={styles.container}>
                        <PageSubtitle text="Meet..." />
                        <PageTitle text="Me, Myself and I" />

                        <p>
                            Hello, I'm Jordan I'm a freelance frontend developer
                            and second-year undergraduate at The University of
                            Northampton based in the UK. I study BSc (Hons)
                            Computing (Software Engineering) in addition to
                            university I focus my efforts on honing my web
                            development skills by building websites, taking
                            online courses or reading books. Outside of my
                            studies I like to listen to music, take a trip to
                            the cinema or play video games with friends as well
                            as participate in UoN Computing Society events.
                        </p>

                        <p className={styles.introParagraph}>
                            With over three years of freelance experience as a
                            web developer, I have made everything from
                            brochure-style websites to fullstack web apps.
                            Currently, I am focusing my efforts around the JAM
                            Stack (Gatsby / Headless WordPress),
                            component-driven development and modern responsive
                            web design.
                        </p>

                        <section
                            className={`${styles.section} ${styles.teaCounter}`}
                        >
                            <h3>
                                <FontAwesomeIcon
                                    className={styles.title__icon}
                                    icon="mug-hot"
                                    fixedWidth
                                />
                                <span>Cuppa Count</span>
                            </h3>
                            <Counter end={1600} />
                            <p>... cups of tea since September 2018.</p>
                        </section>

                        <section
                            className={`${styles.section} ${styles.favourites}`}
                        >
                            <h3 className={styles.favourites__title}>
                                <FontAwesomeIcon
                                    className={styles.title__icon}
                                    icon="laptop-code"
                                    fixedWidth
                                />
                                <span>Setup</span>
                            </h3>
                            <ul>
                                <li>
                                    <strong>Laptop: </strong>Apple MacBook Pro
                                    (Retina, 13-inch, Early 2015)
                                </li>
                                <li>
                                    <strong>Phone: </strong>OnePlus 5 (Slate
                                    Gray, 128GB)
                                </li>
                                <li>
                                    <strong>Editor: </strong>Visual Studio Code
                                </li>
                                <li>
                                    <strong>Browser: </strong>Google Chrome
                                </li>
                                <li>
                                    <strong>Languages: </strong>HTML, CSS and
                                    JavaScript
                                </li>
                            </ul>
                        </section>

                        <section
                            className={`${styles.section} ${styles.achievements}`}
                        >
                            <h3 className={styles.favourites__title}>
                                <FontAwesomeIcon
                                    className={styles.title__icon}
                                    icon="binoculars"
                                    fixedWidth
                                />
                                <span>Recently, I have...</span>
                            </h3>

                            <ul>
                                <li>
                                    Attended Work in the Web 2020 in Leeds, UK.
                                </li>
                                <li>
                                    Attended the UoN Computing Society
                                    employability night.
                                </li>
                                <li>Completed year 1 of 3 of university.</li>
                                <li>
                                    Became the first first-year to attend and
                                    win the Barclaycard Challenge (2019).
                                </li>
                            </ul>
                        </section>

                        <div className={styles.cta}>
                            <p className={styles.cta__text}>
                                <em>Want to know more?</em>
                            </p>
                            <a
                                className={styles.cta__btn}
                                href="https://cdn.jenewland.me.uk/media/docs/cv_newland-j.pdf"
                            >
                                <FontAwesomeIcon icon="file-alt" fixedWidth />
                                &nbsp;Download CV
                            </a>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default AboutPage
