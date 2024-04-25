import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ElementList = () => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        // Llamada a la API para obtener los elementos
        fetch('/mocks/bandas.json')
            .then(response => response.json())
            .then(data => setElements(data));
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {elements.map(element => (
                <Link to={`/details/${element.id}`} key={element.id}>
                    <div className="border border-gray-300 p-4 rounded-lg">
                        <h3 className="text-lg font-bold">{element.nombre}</h3>
                        {/* Otras informaciones */}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ElementList;
