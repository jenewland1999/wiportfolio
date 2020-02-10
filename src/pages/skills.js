import React, { Component } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import PageSubtitle from "../components/typography/page-subtitle/PageSubtitle"
import PageTitle from "../components/typography/page-title/PageTitle"
import SEO from "../components/SEO"
import SkillsList from "../components/content/skills-list/SkillsList"

import styles from "../styles/pages/skills.module.css"

import "../utils/fontawesome"
class SkillsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <SEO title="Skills" />
                <section className={styles.page__section}>
                    <div className={styles.container}>
                        <PageSubtitle text="My..." />
                        <PageTitle text="Mad Skills" />
                        <p className={styles.introParagraph}>
                            Over the years, I've picked up a wide-range of
                            software development and design skills. Organised
                            into three main categories; languages, frameworks /
                            libraries and technologies, these are the skills I
                            posses and my respective level of said skill.
                        </p>

                        <SkillsList />

                        <div className={styles.cta}>
                            <p className={styles.cta__text}>
                                <em>
                                    Have a project in mind I might be able to
                                    help with?
                                </em>
                            </p>
                            <Link className={styles.cta__btn} to="/contact">
                                <FontAwesomeIcon icon="envelope" fixedWidth />
                                &nbsp;Contact Me
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default SkillsPage
