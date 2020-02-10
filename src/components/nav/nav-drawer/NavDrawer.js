import React, { Component } from "react"

import Nav from "../Nav"
import NavLink from "../nav-link/NavLink"

import styles from "./NavDrawer.module.css"

class NavDrawer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <aside className={styles.navDrawer}>
                <header className={styles.navDrawer__header}>
                    <h3 className={styles.navDrawer__title}>Menu</h3>
                    <h6 className={styles.navDrawer__subtitle}>
                        Please select an option...
                    </h6>
                </header>
                <Nav />
                <footer className={styles.navDrawer__footer}>
                    <NavLink icon="ellipsis-h" text="More" to="/misc" />
                </footer>
            </aside>
        )
    }
}

export default NavDrawer
