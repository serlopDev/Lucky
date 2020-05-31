import React, { useState, useEffect } from 'react';
import '../../styles/AdoptionStatus.scss';
import StatusList from '../AdoptionStatus/subcomponents/StatusList';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import flecha from '../../assets/icons_svg/atras.svg';

export default function AdoptionStatus () {

    const[animals, setAnimals] = useState([]);
    const[filters, setFilters] = useState(false);
    const[filter, setFilter] = useState(false);

    useEffect(() => {
        getAnimals();
    },[]);

    const getAnimals = () => {
        Axios.get(`http://localhost:2020/lucky-db/animals`)
            .then((res) => {
                setAnimals(res.data.animals);
            }).catch((err) => {
                console.log('Ha ocurrido un error');
            })
    }

    const showFilters = () => {
        if(filters === false){
            setFilters(
                <div className='floating-container'>
                <div className='filter-status-container'>
                    <h3>Filtros</h3>
                    <div className='icon-container-FS'>
                        <button className='completed-btn' alt='icono de búsqueda completado' onClick={getCompleted}/>
                        <button className='in_process-btn' alt='icono de búsqueda en proceso' onClick={getInProcess}/>
                        <button className='rejected-btn' alt='icono de búsqueda rechazado' onClick={getRejected}/>
                    </div>
                    
                    <input className='apply-btn-FS' type='button' value='Aplicar' onClick={closeApplyFilter}/>
                    
                </div>
            </div>
            )
        } 
    };

    function closeApplyFilter (){
        if(filters === false){
            setFilters(false);
        }
    };
    const getCompleted = () => {
        setFilter('en adopcion')
    }
    const getInProcess = () => {
        setFilter('en proceso')
    }
    const getRejected = () => {
        setFilter('rechazado')
    };


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
                
                <span className='icon-filtros ' onClick={showFilters}/>
            </div>
            <StatusList animals={animals} filter={filter}/>
            {filters}
        </div>
    )
}