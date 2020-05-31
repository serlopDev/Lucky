import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/ResultsFilters.scss';
import { Link } from 'react-router-dom';
import flecha from '../../assets/icons_svg/atras.svg';
import Animals from './subcomponents/animals';


export default function ResultsFilters () {

    const [animals, setAnimals] = useState([
    ]);

    useEffect(() => {
        axios.get(`http://localhost:2020/lucky-db/animals`)
            .then(res => {
                  setAnimals(res.data.animals);
            }
            ).catch(err => {
                console.log('Ha habido un error de conexión con la base de datos')
            })

    }, []);

    return(
        <div className='content'>

            <div className='filter-search-container'>
                <Link to='/adopcion'>
                    <img src={flecha} className='back-btn' alt='botón de retroceder'/>
                </Link>
                

                <div className='search-container'>
                    <input type='text' className='search-filters' placeholder='Buscar'/>
                    <span className='icon-buscar'/>
                </div>
                
                <span className='icon-filtros '/>
            </div>
            <Animals animals={animals} />
        </div>
    )
}