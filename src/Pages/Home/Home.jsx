import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SearchInput from '../../Components/SearchInput/SearchInput';
import ElementList from '../../Components/ElementList/ElementList';
import styles from './Home.module.css';
import 'tailwindcss/tailwind.css';
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
/*
    // Encontre la banda con ID 1
    const banda = bandas.find(b => b.id === 1) || {};
*/
return (
    <div className={styles.HomeContainer}>
        <Header />
        <SearchInput onSearch={(searchTerm) => console.log('Búsqueda:', searchTerm)} />
        <div className="flex flex-wrap justify-center">
            {bandas.map(banda => (
                <div key={banda.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={banda.imagen} alt={banda.nombre} />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{banda.nombre}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{banda.biografia}</p>
                        <Button text="Ver más" onClick={() => onClickElementHandler(banda.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"/>
                    </div>
                </div>
            ))}
        </div>
       {/* <ElementList /> */}
        <Footer />
    </div>
);
}

export default Home;