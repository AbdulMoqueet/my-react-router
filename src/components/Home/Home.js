import React from 'react';
import Card from '../Reusable/Card/Card';
import Styles from './Home.module.css';

const Home = () => {
    return (
        <div className={Styles.home}>
            <Card text="Welcome To HomePage" />
        </div>
    );
}

export default Home;