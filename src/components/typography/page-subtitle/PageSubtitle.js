import React, { Component } from "react"
import PropTypes from "prop-types"

import styles from "./PageSubtitle.module.css"

class PageSubtitle extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <h6 className={styles.page__subtitle}>{this.props.text}</h6>
    }
}

PageSubtitle.propTypes = {
    text: PropTypes.node.isRequired,
}

export default PageSubtitle
