import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/posts">Post</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;