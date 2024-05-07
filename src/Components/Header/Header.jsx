import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import x2small from '../../assets/x2small.png';
import { ROUTES } from '../../const/routes';

// Importa los iconos de redes sociales desde react-icons
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

// Define los enlaces a las páginas oficiales de React
const reactPages = {
    facebook: "https://www.facebook.com/react",
    twitter: "https://twitter.com/reactjs",
    instagram: "https://www.instagram.com/reactjs"
};

const Header = () => {
    return (
        <div className={styles.HeaderContainer}>
            <header className={styles.header}>
                <Link to={ROUTES.home} className={styles.homeLink}>Bandas</Link>
                <div className={styles.logoContainer}>
                    <Link to={ROUTES.home}>
                        <img src={x2small} alt="Grupo" className={styles.logo} />
                    </Link>
                </div>
                <div className={styles.socialIcons}>
                    {/* Enlaza los iconos de redes sociales a las páginas oficiales de React */}
                    <a href={reactPages.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF className={styles.socialIcon} /></a>
                    <a href={reactPages.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter className={styles.socialIcon} /></a>
                    <a href={reactPages.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.socialIcon} /></a>
                </div>
            </header>
        </div>
    );
};

export default Header;
