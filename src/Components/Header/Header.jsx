import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter
import styles from './Header.module.css'
import x2small from '../../assets/x2small.png';

const Header = () => {
    const currentDate = new Date().toLocaleDateString();
    return (
        <div className={styles.HeaderContainer}>
        <Router> {}
        <header className={styles.header}>
            <a href="/" className={`${styles.homeLink}`}>Home</a>
            <img src={x2small} alt="Grupo" className={`${styles.logo}`} /> {/* Asegúrate de ajustar el tamaño adecuado */}
            <span className={`${styles.date}`}>{currentDate}</span>
        </header>
        </Router>
        </div>
    );
};

export default Header;
