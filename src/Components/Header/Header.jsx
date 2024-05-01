import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import x2small from '../../assets/x2small.png';
import { ROUTES } from '../../const/routes'; //Para ir al home usamos ROUTES

const Header = () => {
    const currentDate = new Date().toLocaleDateString();
    return (
        <div className={styles.HeaderContainer}>
            <header className={styles.header}>
                <Link to={ROUTES.home} className={styles.homeLink}>Home</Link>
                <img src={x2small} alt="Grupo" className={styles.logo} /> 
                <span className={styles.date}>{currentDate}</span>
            </header>
        </div>
    );
};

export default Header;
