import React from 'react';
import Styles from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer className={Styles.footer} style={props.style}>
            &copy; Abdul Moqueet | All Rights Reserved.
        </footer> );
}

export default Footer;