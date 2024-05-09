import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ElementList from '../../Components/ElementList/ElementList';
import SearchInput from '../../Components/SearchInput/SearchInput'; 
import style from './Home.module.css';

function Home() {
    const [elements, setElements] = useState([]);
    const [filteredElements, setFilteredElements] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/mocks/bandas.json');
                const data = await response.json();
                setElements(data);
                setFilteredElements(data); 
            } catch (error) {
                console.error('Error fetching bandas:', error);
            }
        };
        
        fetchData();
    }, []);

    const handleSearch = (searchTerm) => {
        if (typeof searchTerm === 'string') { 
            const filtered = elements.filter(element =>
                element.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredElements(filtered);
        }
    };

    return (
        <div className={style.Homecontainer}>
            <Header />
            <SearchInput elements={elements} setFilteredElements={handleSearch} />
            <ElementList elements={filteredElements} />
            <Footer />
        </div>
    );
}

export default Home;
