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
                    <div class="container my-24 mx-auto md:px-6">
  <section class="mb-32">
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="flex flex-wrap items-center">
        <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img src={banda.imagen} alt={banda.nombre}
            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-2xl font-bold">
            {banda.nombre}
            </h2>
            <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
              {banda.año_formacion}
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              Miembros:  {banda.miembros.map((miembro, index) => (
                <span key={index}>
                  {miembro}
                  {index !== banda.miembros.length - 1 && ", "}
                </span>
              ))}
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
             {banda.biografia}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


    

<div class="container my-24 mx-auto md:px-6">
  <section class="mb-32">
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="flex flex-wrap items-center">
        <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
        <iframe 
        width="560" 
        height="315" 
        src={banda.url} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-2xl font-bold">
            Primer disco:
            </h2>
          
            <p class="text-neutral-500 dark:text-neutral-300">
             {banda.primer_disco}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
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

