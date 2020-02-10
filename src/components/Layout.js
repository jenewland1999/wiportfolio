import React, { Component } from "react"
import PropTypes from "prop-types"

import Backdrop from "./misc/backdrop/Backdrop"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import NavDrawer from "./nav/nav-drawer/NavDrawer"

import styles from "./Layout.module.css"

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavDrawerOpen: false,
        }

        this.backdropClickHandler = this.backdropClickHandler.bind(this)
        this.navDrawerClickHandler = this.navDrawerClickHandler.bind(this)
    }

    backdropClickHandler() {
        this.setState({ isNavDrawerOpen: false })
    }

    navDrawerClickHandler() {
        this.setState(prevState => ({
            isNavDrawerOpen: !prevState.isNavDrawerOpen,
        }))
    }

    render() {
        let backdrop, navDrawer

        if (this.state.isNavDrawerOpen) {
            backdrop = (
                <Backdrop backdropClickHandler={this.backdropClickHandler} />
            )
            navDrawer = <NavDrawer />
        }

        return (
            <div className={styles.page}>
                <Header navDrawerClickHandler={this.navDrawerClickHandler} />
                {navDrawer}
                {backdrop}
                <main className={styles.page__content}>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
