import React, { Component } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import PageSubtitle from "../components/typography/page-subtitle/PageSubtitle"
import PageTitle from "../components/typography/page-title/PageTitle"
import SEO from "../components/SEO"

import styles from "../styles/pages/404.module.css"

class MiscPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <SEO title="Misc Page" />
                <section className={styles.page__section}>
                    <div className={styles.container}>
                        <PageSubtitle text="More..." />
                        <PageTitle text="Stuff" />

                        <p className={styles.introParagraph}>
                            Something is supposed to go here.
                        </p>

                        <div className={styles.cta}>
                            <p className={styles.cta__text}>
                                <em>Want to go back to the homepage?</em>
                            </p>
                            <Link className={styles.cta__btn} to="/">
                                <FontAwesomeIcon icon="home" fixedWidth />
                                &nbsp;Homepage
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default MiscPage
