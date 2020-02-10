import React, { Component } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Banner from "../components/misc/banner/Banner"

import styles from "../styles/pages/index.module.css"

import "../utils/fontawesome"

class IndexPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <SEO title="Homepage" />
                <Banner />
                <div className={styles.content}>
                    <section className={styles.hero}>
                        <div className={styles.hero__content}>
                            <h6 className={styles.hero__subtitle}>
                                Hello, I'm...
                            </h6>
                            <h2 className={styles.hero__title}>
                                <span className={styles.title__fname}>
                                    Jordan{" "}
                                </span>
                                <span className={styles.title__lname}>
                                    Newland
                                </span>
                            </h2>
                            <p className={styles.hero__summary}>
                                A front end developer with a passion for UI/UX
                                design currently studying software engineering
                                in the UK. Be sure to take a look around.
                            </p>
                            <div className={styles.hero__btnGroup}>
                                <Link
                                    to="/contact"
                                    className={styles.btn__contact}
                                >
                                    GET IN TOUCH
                                </Link>
                                <a
                                    href="/cv_newland-j.pdf"
                                    className={styles.btn__cv}
                                >
                                    DOWNLOAD CV
                                </a>
                            </div>
                        </div>
                    </section>
                    <nav className={styles.socialNav}>
                        <a
                            href="https://github.com/jenewland1999/"
                            className={styles.socialNav__item}
                        >
                            <FontAwesomeIcon icon={["fab", "github-square"]} />
                        </a>
                        <a
                            href="https://linkedin.com/in/jenewland1999/"
                            className={styles.socialNav__item}
                        >
                            <FontAwesomeIcon icon={["fab", "linkedin"]} />
                        </a>
                        <a
                            href="https://twitter.com/jenewland1999/"
                            className={styles.socialNav__item}
                        >
                            <FontAwesomeIcon icon={["fab", "twitter-square"]} />
                        </a>
                    </nav>
                </div>
            </Layout>
        )
    }
}

export default IndexPage
