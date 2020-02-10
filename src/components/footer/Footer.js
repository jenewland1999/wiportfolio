import React from "react"

import styles from "./footer.module.css"

const Footer = () => (
    <footer className={styles.footer}>
        <p className={styles.footer__copyright}>
            &copy; {new Date().getFullYear()} Jordan Newland
        </p>
    </footer>
)

export default Footer
