import React, { Component } from "react"

import NavItem from "./nav-item/NavItem"

import styles from "./Nav.module.css"

export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <NavItem icon="home" text="Home" to="/" />
                    <NavItem icon="briefcase" text="Work" to="/work" />
                    <NavItem icon="pencil-ruler" text="Skills" to="/skills" />
                    <NavItem icon="user" text="About" to="/about" />
                    <NavItem icon="envelope" text="Contact" to="/contact" />
                </ul>
            </nav>
        )
    }
}
