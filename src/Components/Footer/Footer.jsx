import React from 'react';
import styles from './Footer.module.css'; // Importa el archivo CSS

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={`${styles.flexContainer} justify-between`}>
            <a href="https://github.com/Santiag0Vidal/trabajo_practico_react_parte2" target="_blank" className={`${styles.link} mx-4`}>GitHub</a>
            <p className={styles.text}>Grupo x2</p>
            <p className={styles.text}>Programación Web Avanzada 2024</p>
        </div>
    </footer>
    

    );
};

export default Footer;
