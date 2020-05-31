import React, { useState } from 'react';
import '../../../styles/AnimalProfile.scss';
import video from '../../../assets/img/advertencia/group5.svg';
import { Link } from 'react-router-dom';

export default function Advertisement() {

    const [popUp, setPopUp] = useState(
    <div className='floating-box'>
        <div className='advertisement-container'>

        <h2 className='advertisement-title'>Solicitud de adopción</h2>
        <p>
        Adoptar es un acto de amor, pero sobre todo una responsabilidad de por vida
        </p>
        <p>
        Por éste motivo es importante que veas el siguiente vídeo donde 
        te explicamos como va a ser todo el proceso de adopción
        </p>
        <img className='advertisement-video' src={video} alt=""/>
        <h2 className='advertisement-subtitle'>¿Quieres continuar con el proceso de adopción?</h2>

        <div className='advertisement-btn-container'>
            <input id='cancelar' type='button' value='Cancelar' onClick={() => closePopUp(popUp)}/>
            <Link className='continue-link' to='/formulario-adopcion'>
            <input id='continuar' type='button' value='Continuar'/>
            </Link>
            
        </div>
    </div>
    </div>
    );

    // Ralentizar la acción al pulsar el botón onclick
    
    function closePopUp (popUp) {
        if(popUp !== false){
           setPopUp(false);
        }
    };


    return(
        <div className='correct-margin'>
            {popUp}
        </div>
    )
}