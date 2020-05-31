import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../styles/AnimalProfile.scss';
import DataAnimal from './subcomponents/DataAnimal';
import HealthAnimal from './subcomponents/HealthAnimal';
import AdoptionAnimal from './subcomponents/AdoptionAnimal';

import maleIco from '../../assets/icons_svg/male.svg';
import femaleIco from '../../assets/icons_svg/female.svg';
import Advertisement from './subcomponents/Advertisement';
import Axios from 'axios';

export default function AnimalProfile () {

    const {id} = useParams();

    const [advertisement, setadvertisement] = useState(false);
    const [animal, setAnimal] = useState({});

    useEffect(() => {
        getAnimal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const dataAnimal = <DataAnimal id={id}/>
    const healthAnimal = <HealthAnimal animal={animal}/>
    const adoptionAnimal = <AdoptionAnimal animal={animal}/>
    const [component, setComponent] = useState(dataAnimal);


    // Función para llamar a los animales de la BBDD

    function getAnimal(){
        Axios.get(`http://localhost:2020/lucky-db/animal/${id}`)
            .then(res => {
               setAnimal(res.data.animal[0]);
            }).catch(err => {
                console.log('Ha ocurrido un error de conexión');
            });
    };


    // Función para mostrar el componente POPUP
    
    function changeComponent (component){
        setComponent(component);        
    };
    function showPopUp(popUp){
        if(advertisement === false){
            setadvertisement(popUp);
        } else {
            setadvertisement(false);
        }
    };

    // Pasamos a primera Inicial a mayúscula y llamamos a la imagen de nuestro NODE

    const animalImage = `http://localhost:2020/${animal.image}`;
    const sexIco = [];

    function capitilice(word){
        if(typeof word !== 'string') return ''
        return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    }

    const name = capitilice(animal.name);
    const city = capitilice(animal.city);
    const story = capitilice(animal.history);

    if(animal.sex === 'male'){
        sexIco.push(maleIco);
    } else {
        sexIco.push(femaleIco);
    }

    return(
        <div className='content'>
               
            <div className='btn-atras-container'>
                <Link to='/adopcion'>
                    <span className='icon-atras'/>
                </Link>
            </div>
            
            <div className='AP-img-container'>
                <img src={animalImage} className='img-AP' alt=''/>
            </div>

            <div className='data-banner-AP'>
                <img src={sexIco} className='sex-ico-AP' alt=''/>
                <div className='data-container'>
                    <h3>{name}</h3>
                    <p>{city}</p>
                </div>

            </div>

            <div className='AP-buttons-container'>
                <button id='btn-data' className='btn-AP-data' onClick={() => changeComponent(dataAnimal)}>Datos</button>
                <button id='btn-data'  className='btn-AP-data' onClick={() => changeComponent(healthAnimal)}>Salud</button>
                <button id='btn-data'  className='btn-AP-data' onClick={() => changeComponent(adoptionAnimal)} >Adopción</button>
            </div>

            <div className='AP-animal-data-container'>
                {component}
            </div>

            <div className='AP-story-container'>
                <h3>Historia</h3>
                <p>
                {story}
                </p>
            </div>
            <input type='button' className='adopt-AP-btn' value='Adoptar' onClick={() => showPopUp(<Advertisement/>)}/>
            
            {advertisement}
        </div>
    )

}