import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ElementList from '../../Components/ElementList/ElementList'; 

import style from './Home.module.css';

function Home() {
    const [elements, setElements] = useState([]);
   
    useEffect(() => {
        fetch('/mocks/bandas.json')
            .then(response => response.json())
            .then(data => {
                setElements(data);
            })
            .catch(error => console.error('Error fetching bandas:', error));
    }, []);

    return (
        <div className={style.Homecontainer}>
            <Header />
            <ElementList elements={elements} />
            <Footer />
        </div>
    );
}

export default Home;
