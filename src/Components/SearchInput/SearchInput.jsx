import React, { useState } from 'react';

const SearchInput = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        // Llamar a la función de búsqueda cuando cambie el término de búsqueda
        onSearch(event.target.value);
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
