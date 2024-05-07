import React from 'react';
import styles from './Footer.module.css'; 
import { FaReact, FaGithub } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.container}>
                <div className="flex items-center justify-between">
                    <span className={styles.groupName}>Grupo: X2</span>
                    <div className="flex items-center">
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className={styles.reactLink}>
                            <FaReact className={styles.icon} /> 
                        </a>
                        <a href="https://github.com/Santiag0Vidal/trabajo_practico_react_parte2" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                            <FaGithub className={styles.icon} /> 
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
