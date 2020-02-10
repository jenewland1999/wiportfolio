import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import PageSubtitle from "../components/typography/page-subtitle/PageSubtitle"
import PageTitle from "../components/typography/page-title/PageTitle"
import SEO from "../components/SEO"
import WorkList from "../components/content/work-list/WorkList.js"

import styles from "../styles/pages/work.module.css"

import "../utils/fontawesome"
class WorkPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <SEO title="Work" />
                <section className={styles.page__section}>
                    <div className={styles.container}>
                        <PageSubtitle text="Behold..." />
                        <PageTitle text="My Work" />
                        <p className={styles.introParagraph}>
                            Here are just a few pieces of web-related work I
                            have created over the years demonstrating a range of
                            skills from basic brochure-style websites using
                            HTML, CSS and JS to backend applications built using
                            Express (NodeJS).
                        </p>
                        <WorkList />
                        <div className={styles.cta}>
                            <p className={styles.cta__text}>
                                <em>View more projects on...</em>
                            </p>
                            <a
                                className={styles.cta__btn}
                                href="https://github.com/jenewland1999?tab=repositories"
                            >
                                <FontAwesomeIcon
                                    icon={["fab", "github"]}
                                    fixedWidth
                                />
                                &nbsp;GitHub
                            </a>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default WorkPage
