import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Log-Register.scss';

export default function SelectLogin () {

    return(
        <div className='content'>

            <div className='bg-selectLogin'>

                <div className='buttons-container'>
                    
                    <h2>¿Cómo quieres entrar?</h2>
                    <Link to='/login-usuario'>
                        <input className='select-button' value='Usuario'/>
                    </Link>
                    <Link to='/login-usuario'>
                        <input className='select-button' value='Asociación Protectora'/>
                    </Link>
                    <Link to='/inicio' className='p-buttons'>Registrarse en otro momento</Link>
                </div>

            </div>

        </div>
    )
}
