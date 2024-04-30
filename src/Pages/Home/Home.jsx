import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SearchInput from '../../Components/SearchInput/SearchInput';
import styles from './Home.module.css'; // Importa estilos desde Home.module.css
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import Button from '../../Components/Button/Button';
import { Link } from "react-router-dom";

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
            
            <div className={styles.searchContainer}>
                <SearchInput onSearch={(searchTerm) => console.log('Búsqueda:', searchTerm)} />
            </div>
            <div className="flex flex-wrap justify-center">
                {bandas.map(banda => (
                    <div key={banda.id} className={styles.bandaCard}>
                        <Link to={`${ROUTES.element.replace(':id', banda.id)}`}>
                            <img className={styles.bandaImage} src={banda.imagen} alt={banda.nombre} />
                            <h5 className={styles.bandaTitle}>{banda.nombre}</h5>
                        </Link>
                        <p className={styles.bandaDescription}>{banda.biografia}</p>
                        <Button text="Ver más" onClick={() => navigate(`${ROUTES.element.replace(':id', banda.id)}`)} className={styles.verMasButton}/>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;