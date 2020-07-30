import React from 'react';
import Card from '../Reusable/Card/Card';
import Styles from './Posts.module.css';
import Footer from '../Footer/Footer';

import _ from 'lodash';

const Posts = () => {

    const cardStyle = {
        padding: "60px 60px",
        background: "burlywood",
        color: "#fff"
    };

    const footerStyle = {
        position: "relative",
        bottom: "10px"
    }

    const cards = [];

    _.times(6, (i) => {

        cards.push(
            <Card key={i}
                text={`Post ${i + 1}`}
                style={cardStyle} />
        );

    });

    return (
        <div>
            <div className={Styles.posts}>
                {cards}
            </div>
            <Footer style={footerStyle} />
        </div>
    );

}

export default Posts;