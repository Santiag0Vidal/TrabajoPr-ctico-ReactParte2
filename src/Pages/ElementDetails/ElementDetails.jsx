import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ElementDetails = () => {
    const { id } = useParams();
    const [element, setElement] = useState(null);

    useEffect(() => {
        // Llamada a la API para obtener detalles del elemento
        fetch(`/mocks/banda-${id}.json`)
            .then(response => response.json())
            .then(data => setElement(data));
    }, [id]);

    if (!element) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h2>{element.nombre}</h2>
            {/* Mostrar otras informaciones detalladas */}
        </div>
    );
};

export default ElementDetails;


