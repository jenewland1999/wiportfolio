import React, { Component } from "react"

import styles from "./Banner.module.css"

class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div className={styles.banner}></div>
    }
}

export default Banner
