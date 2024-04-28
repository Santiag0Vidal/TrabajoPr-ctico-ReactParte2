import React from 'react';
//import styles from './Footer.module.css'; // Importa el archivo CSS
//implemento tailwind aca sin usar el Footer.module.css
const Footer = () => {
    return (
        <footer class="flex flex-col items-center bg-[#1f2937] text-center text-white">
  <div class="container p-6">
    <div class="">
      <p class="flex items-center justify-center">
        <span class="me-4">Grupo: X2</span>
       
      </p>
    </div>
  </div>

  <div class="w-full bg-black/20 p-4 text-center">
    © 2024 Copyright:
    <a href="https://tw-elements.com/"> Programacion Web Avanzada</a>
  </div>
</footer>
    

    );
};

export default Footer;
