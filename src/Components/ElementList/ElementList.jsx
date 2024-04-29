import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ElementList.module.css'; // Importa los estilos desde ElementList.module.css

const ElementList = () => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        // Llamada a la API para obtener los elementos
        fetch('/mocks/bandas.json')
            .then(response => response.json())
            .then(data => setElements(data));
    }, []);

    return (
        <div className={styles.grid}>
            {elements.map(element => (
                <Link to={`/details/${element.id}`} key={element.id}>
                    <div className={styles.elementContainer}>
                        <h3 className={styles.elementTitle}>{element.nombre}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ElementList;
