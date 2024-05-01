import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import style from "./ElementDetails.module.css";
import { ROUTES } from "../../const/routes";
import Button from '../../Components/Button/Button'; 
import { useNavigate } from "react-router-dom";

const ElementDetails = () => {
    const { id } = useParams();
    const [banda, setBanda] = useState(null);
    const navigate = useNavigate();

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
                    <div class={style.container}>
  <section class={style.section}>
    <div
      class={style.block}>
      <div class={style.divImg}>
        <div class={style.imageContainer}>
          <img src={banda.imagen} alt={banda.nombre}
            class={style.image} />
        </div>
        <div class={style.textContainer}>
          <div class={style.paragraph}>
            <h2 class={style.title}>
            {banda.nombre}
            </h2>
            <p class={style.anioFor}>
              {banda.año_formacion}
            </p>
            <p class={style.membersText}>
              Miembros:  {banda.miembros.map((miembro, index) => (
                <span key={index}>
                  {miembro}
                  {index !== banda.miembros.length - 1 && ", "}
                </span>
              ))}
            </p>
            <p class={style.bio}>
             {banda.biografia}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


    

<div class={style.container}>
<section class={style.section}>
    <div
      class={style.block}>
      <div class={style.divImg}>
      <div class={style.imageContainer}>
        {/*a este iframe no le aplicamos tailwind porque lo sacamos de youtube*/ }
        <iframe 
        width="560" 
        height="315" 
        src={banda.url} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

        </iframe>
        </div>
        <div class={style.textContainer}>
        <div class={style.paragraph}>
            <h2 class={style.title}>
            Primer disco:
            </h2>
          
            <p class={style.bio}>
             {banda.primer_disco}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Button text="Volver" onClick={() => navigate(ROUTES.home)} className={style.verMasButton}/>
</div>



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

