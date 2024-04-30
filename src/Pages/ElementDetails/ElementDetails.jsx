import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import style from "./ElementDetails.module.css";


const ElementDetails = () => {
    const { id } = useParams();
    const [banda, setBanda] = useState(null);

    useEffect(() => {
        fetch(`/mocks/bandas.json`)
            .then(response => response.json())
            .then(data => {
                const result = data.find(b => b.id.toString() === id);
                setBanda(result);
            });
    }, [id]);



    return (
        <div>
            <Header />
            {banda ? (
                <div>
                    <h1>{banda.nombre}</h1>
                    <img src={banda.imagen} alt={banda.nombre} />
                    <p>{banda.biografia}</p>
                </div>
 ) : (
    <div className={style.redBoxStyle}>
        <p>No se encontró la información de la banda.</p>
    </div>
)}
<Footer />
</div>
);
}

export default ElementDetails;

