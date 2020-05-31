import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../../../styles/Log-Register.scss";
import logoLucky from "../../../assets/img/register/logo.svg";
import check from "../../../assets/img/register/checkmark.svg";
import ojo from "../../../assets/icons_svg/ojo.svg";
import Axios from "axios";
import { UserProvider } from "../../Context/UserContext";

export default function Login() {

  const [user, setUser] = useState({
    name:'default',
    password:'default',
  })
  
  const getUser = (event) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value,
      [event.target.name] : event.target.value
    })
  }
  return (
    <UserProvider value={{user}}>
    <div className="content">

      <div className="logo-container">
        <Link to='/inicio'>
          <img className="logo-lucky" src={logoLucky}  alt='logo de aplicación' />
        </Link>
      </div>

      <h1 className="title-form">
        ¡Hola! para continuar, inicia sesión o crea una cuenta
      </h1>

      <form className="register-form">

        <div className="input-container">
          <input type="text" name='user' className="data-form" id="user" placeholder="Usuario" onChange={getUser}/>
            <img className="check" src={check}  alt='logo confirmado'/>
        </div>

        <div className="input-container">
          <input type="text" name='password' className="data-form" id="password" placeholder="Contraseña" onChange={getUser}/>
            <img className="check" src={ojo} alt='logo confirmado'/>
        </div>

        <Link to='/registro/recuperar-contraseña' className='forget-pass'><p>¿Has olvidado tu contraseña?</p></Link>


              
      <input type='submit' className='btn-signIn' value='Iniciar sesión'/>

      <Link to='/registro'>
        <input type='button' className='btn-create-user' value='Crear cuenta'/>
      </Link>

      </form>


    </div>
    </UserProvider>
  );
}
