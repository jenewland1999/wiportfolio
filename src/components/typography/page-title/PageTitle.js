import React, { Component } from "react"
import PropTypes from "prop-types"

import styles from "./PageTitle.module.css"

class PageTitle extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <h2 className={styles.page__title}>{this.props.text}</h2>
    }
}

PageTitle.propTypes = {
    text: PropTypes.node.isRequired,
}

export default PageTitle
