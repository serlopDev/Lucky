import React from 'react';
import '../../../styles/Home.scss';
import logoLucky from "../../../assets/img/register/logo.svg";

export default function HomeTitle() {
    
    return(
    <div className='title-container'>
        <img className='logo-home' src={logoLucky} alt=''/>
        <h1 className='helloName'>¡Bienvenido!</h1>
    </div>
    )
}