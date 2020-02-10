import React, { Component } from "react"

import styles from "./Backdrop.module.css"

class Backdrop extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div
                onClick={this.props.backdropClickHandler}
                className={styles.backdrop}
            ></div>
        )
    }
}

export default Backdrop
