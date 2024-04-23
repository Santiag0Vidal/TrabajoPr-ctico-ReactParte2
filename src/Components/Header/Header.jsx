import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.HeaderContainer}>
        <Router> {/* Envuelve tu aplicación con el componente BrowserRouter */}
            <header className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <p>soy un header</p>
                    <Link to="/">
                        <img src="/logo.png" alt="Logo" className="h-8" />
                    </Link>
                    {/* Otras imágenes, textos o descripciones */}
                </div>
            </header>
        </Router>
        </div>
    );
};

export default Header;
