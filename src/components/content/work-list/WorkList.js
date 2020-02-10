import React, { Component } from "react"
import JSONData from "../../../../content/work.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./WorkList.module.css"

import "../../../utils/fontawesome"

class WorkList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    formatDate(dateString) {
        const date = new Date(dateString)
        const formatOptions = {
            year: "numeric",
            month: "long",
            day: "2-digit",
        }
        return new Intl.DateTimeFormat("en-GB", formatOptions).format(date)
    }

    render() {
        return (
            <ul className={styles.work}>
                {JSONData.work.map(work => (
                    <li key={work.id}>
                        <section className={styles.workItem}>
                            <p className={styles.workItem__lastUpdated}>
                                <FontAwesomeIcon
                                    icon={["far", "clock"]}
                                    fixedWidth
                                />
                                <span className={styles.lastUpdated__text}>
                                    {`Last updated ${this.formatDate(
                                        work.lastUpdated
                                    )}`}
                                </span>
                            </p>
                            <h3 className={styles.workItem__name}>
                                {work.name}
                            </h3>
                            <p className={styles.workItem__description}>
                                {work.description}
                            </p>
                            {work.demoLink && (
                                <a className={styles.btn} href={work.demoLink}>
                                    Demo / Live Site
                                </a>
                            )}

                            {work.githubLink && (
                                <a
                                    className={styles.btn}
                                    href={work.githubLink}
                                >
                                    GitHub
                                </a>
                            )}
                        </section>
                    </li>
                ))}
            </ul>
        )
    }
}

export default WorkList
