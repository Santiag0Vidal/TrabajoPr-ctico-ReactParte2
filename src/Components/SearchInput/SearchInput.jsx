import React, { useState } from 'react';
import styles from './SearchInput.module.css';

const SearchInput = ({ setFilteredElements }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        // Pasar el término de búsqueda al componente padre
        setFilteredElements(term);
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Buscar Banda"
                value={searchTerm}
                onChange={handleChange}
                className={styles.input}
            />
        </div>
    );
};

export default SearchInput;