import React, { useState } from 'react';

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
        <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded-lg"
        />
    );
};

export default SearchInput;
