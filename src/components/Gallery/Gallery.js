import React from 'react';
import Card from '../Reusable/Card/Card';
import Styles from './Gallery.module.css';
import Footer from '../Footer/Footer';

const Gallery = () => {

    const customStyle = {
        background: "crimson",
        padding:"100px 100px",
        color: "#fff"
    };

    return (
        <div className={Styles.gallery}>
            <Card text="Gallery"
            style={customStyle} />
            <Footer />
        </div>
    );
}

export default Gallery;