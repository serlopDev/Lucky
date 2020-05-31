import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../../styles/WelcomePage.scss';
import logo from '../../assets/img/welcome_page/group29.svg';
import lucky from '../../assets/img/welcome_page/group.svg';


export default function WelcomePage(){

    const [redirect, setRedirect] = useState(false);

    setTimeout(redirecting, 3000);

    function redirecting() {
        setRedirect('/tutorial');
    }

    return(
        <section className="content">
        <div className="welcome-container">         
            <img className="logo" src={logo} alt='logo de la aplicación'/>
            <img  className="lucky" src={lucky}  alt='logo de la aplicación'/>
        </div>
        <Redirect to={redirect}/>
        </section>
    )
}