import React from "react";

import styles from '../styles/header.module.css'
import "@fontsource/lexend"

const style = {
    fontFamily: "Lexend, sans-serif",
}

export default function Header() {
    return (
        <header className={styles.headerContainer} style={style}>
            <div className={styles.headerLeft}>
                <h1>Home</h1>
            </div>
            <div className={styles.headerRight}>
                <h1>My Work</h1>
            </div>
        </header>
    );
}