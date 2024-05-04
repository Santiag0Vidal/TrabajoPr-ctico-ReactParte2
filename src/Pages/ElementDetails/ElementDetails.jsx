// ElementDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import style from "./ElementDetails.module.css";
import { ROUTES } from "../../const/routes";
import Button from '../../Components/Button/Button'; 
import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDF from '../../Components/PDF/PDF'; // Importa el componente PDF

const ElementDetails = () => {
    const { id } = useParams();
    const [banda, setBanda] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/mocks/banda_${id}.json`)
            .then(response => response.json())
            .then(data => {
                setBanda(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setIsLoading(false);
            });
    }, [id]);

    return (
        <div>
            <Header />
            {isLoading ? (
                <div className={style.redBoxStyle}>
                    <p>Cargando datos de la banda...</p>
                </div>
            ) : banda ? (
                <div className={style.container}>
                    <section className={style.section}>
                        <div className={style.block}>
                            <div className={style.divImg}>
                                <div className={style.imageContainer}>
                                    <img src={banda.imagen} alt={banda.nombre} className={style.image} />
                                </div>
                                <div className={style.textContainer}>
                                    <div className={style.paragraph}>
                                        <h2 className={style.title}>{banda.nombre}</h2>
                                        <p className={style.anioFor}>{banda.año_formacion}</p>
                                        <p className={style.membersText}>
                                            Miembros: {banda.miembros.join(", ")}
                                        </p>
                                        <p className={style.bio}>{banda.biografia}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={style.section}>
                        <div className={style.block}>
                            <div className={style.divImg}>
                                <div className={style.imageContainer}>
                                    <iframe 
                                        width="560" 
                                        height="315" 
                                        src={banda.url} 
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen
                                    />
                                </div>
                                <div className={style.textContainer}>
                                    <div className={style.paragraph}>
                                        <h2 className={style.title}>Primer disco:</h2>
                                        <p className={style.bio}>{banda.primer_disco}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <PDFDownloadLink document={<PDF banda={banda} />} fileName="banda.pdf">
                        {({ blob, url, loading, error }) => (
                            <Button text={loading ? 'Generando PDF...' : 'Descargar PDF'} className={style.verMasButton}/>
                        )}
                    </PDFDownloadLink>
                    <Button text="Volver" onClick={() => navigate(ROUTES.home)} className={style.verMasButton}/>
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
