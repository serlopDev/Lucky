import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/AdoptionPage.scss';
import { Link } from 'react-router-dom';
import AnimalsAdoptionList from './AnimalsAdoptionList';
import adelante from '../../../assets/icons_svg/adelante.svg';

export default function UserPets () {

    const[adoptionAnimals, setAdoptionAnimals] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:2020/lucky-db/animals`)
        .then(res => {
            setAdoptionAnimals(res.data.animals);
        })
        .catch( err => {
            console.log('Error de conexión con base de datos');
        });
    }, []);
    
    return(
        <div className='content'>
        <div className='pets-container'>
        
        {/* Aquí deberemos modificar y añadir la flecha y ponerla en color salmón */}
        <div>
        <Link to='estado-adopcion' className='status'>
            <input type='button' className='status-input-AP' value='Estado de la adopción'/>
            <img className='adelante-arrow' src={adelante} alt='icono'/>
        </Link>
        </div>
            



            <div className='filter-container'>
                <h2>Animales en adopción</h2>
                <Link to= '/filtros'><span className='icon-filtros'/></Link>
                
            </div>

            <AnimalsAdoptionList adoptionAnimals={adoptionAnimals}/>

           </div>
        </div>
    )
}