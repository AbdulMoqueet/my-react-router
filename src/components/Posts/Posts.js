import React from 'react';
import Card from '../Reusable/Card/Card';
import Styles from './Posts.module.css';
import _ from 'lodash';

const Posts = () => {

    const cardStyle = {
        padding: "60px 60px",
        background: "burlywood",
        color: "#fff"
    };

    const cards = [];

    _.times(6, (i)=>{

        cards.push(
            <Card key={i}
            text={`Post ${i+1}`} 
            style={cardStyle} />
        );

    });

    return (
        <div className={Styles.posts}>
            {cards}
        </div>
    );

}

export default Posts;