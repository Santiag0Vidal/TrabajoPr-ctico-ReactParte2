import React, { useState } from 'react';
import style from "./SearchInput.module.css";

const SearchInput = ({ bandas, setFilteredBandas }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        // Filtrar las bandas por nombre
        const filtered = bandas.filter(banda =>
            banda.nombre.toLowerCase().includes(term.toLowerCase())
        );
        // Actualizar la lista de bandas filtradas
        setFilteredBandas(filtered);
    };

    return (
        <div className={style['input-container']}> 
            <input
                type="text"
                placeholder="Buscar Banda"
                value={searchTerm}  
                onChange={handleChange}
                className={style.input} 
            />
        </div>
    );
};

export default SearchInput;
