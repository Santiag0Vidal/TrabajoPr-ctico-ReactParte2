// Footer.jsx

import React from 'react';
import styles from './Footer.module.css'; // Importa el archivo CSS

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.container}>
                <div className="">
                    <p className="flex items-center justify-center">
                        <span className={styles.groupName}>Grupo: X2</span>
                    </p>
                </div>
            </div>

            <div className={styles.copyright}>
                © 2024 Copyright:
                <a href="https://github.com/Santiag0Vidal/trabajo_practico_react_parte2" target="_blank" rel="noopener noreferrer"> Programación Web Avanzada</a>
            </div>
        </footer>
    );
};

export default Footer;
