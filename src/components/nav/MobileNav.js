import React, { Component } from "react"

import Nav from "./Nav"

import styles from "./MobileNav.module.css"

class MobileNav extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={styles.mobileNav}>
                <Nav />
            </div>
        )
    }
}

export default MobileNav
