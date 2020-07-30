import React from 'react';
import Card from '../Reusable/Card/Card';
import Styles from './Home.module.css';
import Footer from '../Footer/Footer';

const Home = () => {

    return (
        <div className={Styles.home}>
            <Card text="Welcome To HomePage" />
            <Footer />
        </div>
    );
}

export default Home;