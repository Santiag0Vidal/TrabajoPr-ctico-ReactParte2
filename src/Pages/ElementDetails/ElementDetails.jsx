import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

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
        return <div>Hola! Soy el ElementDetails y no me mandaste ningun id</div>;
    }
<Header/>
    return (
        
        <div>
            <h2>{element.nombre}</h2>
            {/* Mostrar otras informaciones detalladas */}
        </div>
    );
};
<Footer/>
export default ElementDetails;


