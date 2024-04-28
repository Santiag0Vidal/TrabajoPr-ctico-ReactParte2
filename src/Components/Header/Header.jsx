import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import x2small from '../../assets/x2small.png';

const Header = () => {
    const currentDate = new Date().toLocaleDateString();
    return (
        <div className={styles.HeaderContainer}>
            <header className={styles.header}>
                <Link to="/" className={styles.homeLink}>Home</Link>
                <img src={x2small} alt="Grupo" className={styles.logo} /> 
                <span className={styles.date}>{currentDate}</span>
            </header>
        </div>
    );
};

export default Header;
