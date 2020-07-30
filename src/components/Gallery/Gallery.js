import React from 'react';
import Card from '../Reusable/Card/Card';
import Styles from './Gallery.module.css';

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
        </div>
    );
}

export default Gallery;