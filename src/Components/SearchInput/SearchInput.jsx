import React, { useState } from 'react';
import styles from './SearchInput.module.css';
import { FaSearch } from 'react-icons/fa'; 

const SearchInput = ({ setFilteredElements }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        setFilteredElements(term);
    };

    return (
        <div className={styles.searchContainer}>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Buscar Banda.."
                    value={searchTerm}
                    onChange={handleChange}
                    className={styles.input}
                />
                <FaSearch className={styles.searchIcon} />
            </div>
        </div>
    );
};

export default SearchInput;
