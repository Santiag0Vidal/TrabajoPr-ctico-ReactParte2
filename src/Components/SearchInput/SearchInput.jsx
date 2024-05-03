import React, { useState } from 'react';
import styles from './SearchInput.module.css';

const SearchInput = ({ elements, setFilteredElements }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        // Filtrar los elementos por nombre de banda
        const filtered = elements.filter(element =>
            element.nombre.toLowerCase().includes(term.toLowerCase())
        );
        // Actualizar la lista de elementos filtrados
        setFilteredElements(filtered);
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
