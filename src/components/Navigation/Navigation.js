import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Post</a></li>
                <li><a href="#">Gallery</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;