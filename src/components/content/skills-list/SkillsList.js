import React, { Component } from "react"
import JSONData from "../../../../content/skills.json"

import styles from "./SkillsList.module.css"

import "../../../utils/fontawesome"

class SkillsList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    sortSkills(a, b) {
        let nameA = a.name.toUpperCase()
        let nameB = b.name.toUpperCase()

        if (nameA < nameB) return -1
        if (nameA > nameB) return 1

        return 0
    }

    render() {
        const languages = JSONData.skills
            .filter(skill => skill.category === "Language")
            .sort(this.sortSkills)
        const frameworks = JSONData.skills
            .filter(skill => skill.category === "Framework / Library")
            .sort(this.sortSkills)
        const technologies = JSONData.skills
            .filter(skill => skill.category === "Technology")
            .sort(this.sortSkills)

        return (
            <>
                <h4 className={styles.skills__title}>Languages</h4>
                <ul className={styles.skills}>
                    {languages.map(language => (
                        <li key={language.id}>
                            <section
                                data-skill-level={language.level}
                                className={styles.skill}
                            >
                                <h6 className={styles.skill__title}>
                                    {language.name}
                                </h6>
                                <p className={styles.skill__level}>
                                    {language.level}
                                </p>
                            </section>
                        </li>
                    ))}
                </ul>

                <h4 className={styles.skills__title}>Frameworks / Libraries</h4>
                <ul className={styles.skills}>
                    {frameworks.map(framework => (
                        <li key={framework.id}>
                            <section
                                data-skill-level={framework.level}
                                className={styles.skill}
                            >
                                <h6 className={styles.skill__title}>
                                    {framework.name}
                                </h6>
                                <p className={styles.skill__level}>
                                    {framework.level}
                                </p>
                            </section>
                        </li>
                    ))}
                </ul>

                <h4 className={styles.skills__title}>Technologies</h4>
                <ul className={styles.skills}>
                    {technologies.map(technology => (
                        <li key={technology.id}>
                            <section
                                data-skill-level={technology.level}
                                className={styles.skill}
                            >
                                <h6 className={styles.skill__title}>
                                    {technology.name}
                                </h6>
                                <p className={styles.skill__level}>
                                    {technology.level}
                                </p>
                            </section>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default SkillsList
