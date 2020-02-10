import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import MobileNav from "../nav/MobileNav"
import NavLink from "../nav/nav-link/NavLink"

import styles from "./Header.module.css"

import "../../utils/fontawesome"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <header className={styles.header}>
                <h1 className={styles.header__logo}>
                    <span>J</span>
                    <span>N</span>
                </h1>
                <button
                    onClick={this.props.navDrawerClickHandler}
                    className={styles.header__navToggle}
                >
                    <FontAwesomeIcon icon="bars" />
                </button>

                <MobileNav />

                <div className={styles.header__navExtra}>
                    <NavLink icon="ellipsis-h" text="More" to="/misc" />
                </div>
            </header>
        )
    }
}

export default Header
