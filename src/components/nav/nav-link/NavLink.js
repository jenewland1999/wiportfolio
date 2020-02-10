import React, { Component } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./NavLink.module.css"

class NavLink extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.isActiveRoute = this.isActiveRoute.bind(this)
    }

    isActiveRoute({ isCurrent }) {
        return isCurrent
            ? { className: `${styles.nav__link} ${styles.nav__linkActive}` }
            : { className: `${styles.nav__link}` }
    }

    render() {
        return (
            <Link getProps={this.isActiveRoute} {...this.props}>
                <FontAwesomeIcon
                    className={styles.link__icon}
                    icon={this.props.icon}
                    fixedWidth
                />
                <span className={styles.link__text}>{this.props.text}</span>
            </Link>
        )
    }
}

export default NavLink
