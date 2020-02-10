import React, { Component } from "react"

import NavLink from "../nav-link/NavLink"

import styles from "./NavItem.module.css"

export default class NavItem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <li className={styles.nav__item}>
                <NavLink
                    icon={this.props.icon}
                    text={this.props.text}
                    to={this.props.to}
                />
            </li>
        )
    }
}
