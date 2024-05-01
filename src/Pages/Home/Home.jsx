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
    const [filteredBandas, setFilteredBandas] = useState([]); // Estado para las bandas filtradas
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/mocks/bandas.json')
            .then(response => response.json())
            .then(data => {
                setBandas(data);
                setFilteredBandas(data); // Inicializa filteredBandas con todas las bandas
            })
            .catch(error => console.error('Error fetching bandas:', error));
    }, []);

   
    const onClickElementHandler = (bandaId) => {
        console.log('Navigating to details of banda with ID:', bandaId);
        navigate(`${ROUTES.element}/${bandaId}`);
    };

    // Función para filtrar las bandas por nombre
    const handleSearch = (searchTerm) => {
        const filtered = bandas.filter(banda =>
            banda.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBandas(filtered);
    };

    return (
        <div className={styles.HomeContainer}>
            <Header />
            
            <div className={styles.searchContainer}>
                {/* Pasar bandas y setFilteredBandas como props al componente SearchInput */}
                <SearchInput bandas={bandas} setFilteredBandas={setFilteredBandas} onSearch={handleSearch} />
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredBandas.map(banda => ( // Usar filteredBandas en lugar de bandas
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
