import React from 'react';
import { Link } from 'react-router-dom';

export default function OutSessionMorePage () {

    return(
    <div className='content'>
        <div className='outSession-container'>
            <h1 className='title-outSession'>Inicia sesión para acceder a tus datos</h1>
        
            <Link to='/login-usuario'>
                <input type='button' className='login-btn-more' value='Iniciar Sesión'/>
            </Link>
        </div>
    </div>
    )
}