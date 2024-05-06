import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import styles from './ElementList.module.css'; 
import { ROUTES } from "../../const/routes";
import Button from '../../Components/Button/Button'; 

const ElementList = ({ elements }) => {
    const navigate = useNavigate(); 

    return (
        <div>
            <div className="flex flex-wrap justify-center">
                {elements.length === 0 ? (
                    <div>No se encontraron elementos para su búsqueda.</div>
                ) : (
                    elements.map(element => (
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
