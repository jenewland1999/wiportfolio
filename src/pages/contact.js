import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import PageSubtitle from "../components/typography/page-subtitle/PageSubtitle"
import PageTitle from "../components/typography/page-title/PageTitle"
import SEO from "../components/SEO"

import styles from "../styles/pages/contact.module.css"

class ContactPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <SEO title="Contact" />
                <section className={styles.page__section}>
                    <div className={styles.container}>
                        <PageSubtitle text="Want to..." />
                        <PageTitle text="Contact Me?" />

                        <p className={styles.introParagraph}>
                            If you would like to get in touch about a potential
                            project or anything else please don't hesitate to
                            fill out the form or contact me directly using the
                            email button at the bottom of the page.
                        </p>

                        <form
                            className={styles.contactForm}
                            method="post"
                            name="contact"
                            netlify-honeypot="bot-field"
                            data-netlify="true"
                        >
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <label for="name">Your Name</label>
                            <input
                                className={styles.contactForm__input}
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                            <label for="email">Your Email</label>
                            <input
                                className={styles.contactForm__input}
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                            <label for="subject">Subject</label>
                            <select
                                className={styles.contactForm__input}
                                id="subject"
                                name="subject"
                                required
                            >
                                <option value="" disabled selected>
                                    Please select a subject...
                                </option>
                                <option value="Website: Potential Project Enquiry">
                                    Potential Project Enquiry
                                </option>
                                <option value="Website: Other">Other</option>
                            </select>
                            <label for="message">Message</label>
                            <textarea
                                className={styles.contactForm__textarea}
                                id="message"
                                name="message"
                                rows="5"
                                required
                            ></textarea>
                            <button
                                className={styles.contactForm__button}
                                type="submit"
                            >
                                Send
                            </button>
                        </form>

                        <div className={styles.cta}>
                            <p className={styles.cta__text}>
                                <em>Want to contact me directly?</em>
                            </p>
                            <a
                                className={styles.cta__btn}
                                href="mailto:me@jenewland.me.uk"
                            >
                                <FontAwesomeIcon icon="envelope" fixedWidth />
                                &nbsp;Email Me
                            </a>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default ContactPage
