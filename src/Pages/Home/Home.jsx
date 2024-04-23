import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.HomeContainer}>
            <Header/>
            <p>soy un home</p>
            <p>soy un home</p>
            <p>soy un home</p>
            <p>soy un home</p>
            <p>soy un home</p>
            <p>soy un home</p>
            <Footer/>
           
        </div>
    );
}

export default Home;