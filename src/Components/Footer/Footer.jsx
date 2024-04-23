import React from 'react';
import styles from './Footer.module.css'; // Importa el archivo CSS

const Footer = () => {
    return (
        <footer className={styles.footerContainer}> {/* Utiliza la clase CSS desde el archivo importado */}
            <div className="container mx-auto">
                <p>soy un footer</p>
                {/* Información ficticia de la aplicación */}
            </div>
        </footer>
    );
};

export default Footer;
