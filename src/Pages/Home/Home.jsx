import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SearchInput from '../../Components/SearchInput/SearchInput';
import ElementList from '../../Components/ElementList/ElementList';
import styles from './Home.module.css';

function Home() {
    // Definir la función onSearch para manejar la búsqueda
    const handleSearch = (searchTerm) => {
        // Aquí puedes implementar la lógica de búsqueda
        console.log('Búsqueda:', searchTerm);
    };

    return (
        <div className={styles.HomeContainer}>
            <Header />
            {/* Pasar la función onSearch como una propiedad al componente SearchInput */}
            <SearchInput onSearch={handleSearch} />
            <p>soy un home</p>
            <p>soy un home</p>
            <p>soy un home</p>
            <p>soy un home</p>
            <ElementList />
            <Footer />
        </div>
    );
}

export default Home;