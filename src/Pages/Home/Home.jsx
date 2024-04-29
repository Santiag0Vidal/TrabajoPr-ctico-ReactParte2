import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SearchInput from '../../Components/SearchInput/SearchInput';
import styles from './Home.module.css'; // Importa estilos desde Home.module.css
import ElementList from '../../Components/ElementList/ElementList'; // Importa el componente ElementList
import redondos2 from '../../assets/redondos2.webp';
import charly from '../../assets/Charly.webp';
import sumo from '../../assets/sumo.png';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import Button from '../../Components/Button/Button';

function Home() {
    const [bandas, setBandas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/mocks/bandas.json')
            .then(response => response.json())
            .then(data => setBandas(data))
            .catch(error => console.error('Error fetching bandas:', error));
    }, []);

    // Manejador modificado para aceptar un id de banda
    const onClickElementHandler = (bandaId) => {
        console.log('Navigating to details of banda with ID:', bandaId);
        navigate(`${ROUTES.element}/${bandaId}`);
    };

    return (
        <div className={styles.HomeContainer}>
            <Header />
            <SearchInput onSearch={(searchTerm) => console.log('Búsqueda:', searchTerm)} />
            <div className="flex flex-wrap justify-center">
                {/* Línea donde se renderiza el componente ElementList */}
               
                {/* Aquí se renderiza el resto de los elementos */}
                {bandas.map(banda => (
                    <div key={banda.id} className={styles.bandaCard}>
                        <a href="#">
                            <img className={styles.bandaImage} src={banda.imagen} alt={banda.nombre} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className={styles.bandaTitle}>{banda.nombre}</h5>
                            </a>
                            <p className={styles.bandaDescription}>{banda.biografia}</p>
                            <Button text="Ver más" onClick={() => onClickElementHandler(banda.id)} className={styles.verMasButton}/>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
