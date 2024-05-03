import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ElementList.module.css'; // Importa los estilos desde ElementList.module.css
import { ROUTES } from "../../const/routes";
import { useNavigate } from "react-router-dom";
import Button from '../../Components/Button/Button';
import SearchInput from '../../Components/SearchInput/SearchInput'; // Importa el componente SearchInput

const ElementList = ({ redirectToDetails }) => {
    const [elements, setElements] = useState([]);
    const [filteredElements, setFilteredElements] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/mocks/bandas.json')
            .then(response => response.json())
            .then(data => {
                setElements(data);
                setFilteredElements(data); // Inicializa filteredElements con todos los elementos
            })
            .catch(error => console.error('Error fetching elements:', error));
    }, []);

    return (
        <div>
            <SearchInput elements={elements} setFilteredElements={setFilteredElements} />
            <div className="flex flex-wrap justify-center">
                {filteredElements.length === 0 ? (
                    <div>No se encontraron elementos para su búsqueda.</div>
                ) : (
                    filteredElements.map(element => (
                        <div key={element.id} className={styles.bandaCard}>
                            <Link to={`${ROUTES.element.replace(':id', element.id)}`}>
                                <img src={element.imagen} alt={element.nombre} className={styles.bandaImage} />
                                <h5 className={styles.bandaTitle}>{element.nombre}</h5>
                            </Link>
                            <p className={styles.bandaDescription}>{element.biografia}</p>
                            <Button text="Ver más" onClick={() => navigate(`${ROUTES.element.replace(':id', element.id)}`)} className={styles.verMasButton}/>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ElementList;
