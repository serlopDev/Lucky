import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import "../../../styles/Log-Register.scss";
import logoLucky from "../../../assets/img/register/logo.svg";
import check from "../../../assets/img/register/checkmark.svg";
import ojo from "../../../assets/icons_svg/ojo.svg";

export default function Register() {
  const [newUser, setNewUser] = useState({
    image: "",
    username: "",
    name: "",
    surname: "",
    birthday: "",
    email: "",
    password: ""
  });

  // Recogemos el evento que está sucediendo en nuestro elemento de React onChange

  const collectingData = (event) => {
      setNewUser({
          // Hacemos una pseudocopia de nuestro objeto user con los 3 puntos
          ...newUser,
          [event.target.name] : event.target.value,
          [event.target.name] : event.target.value,
          [event.target.name] : event.target.value,
          [event.target.name] : event.target.value,
          [event.target.name] : event.target.value,
          [event.target.name] : event.target.value,
          [event.target.name] : event.target.value
    })
  }

  const sendData = (event) => {
      event.preventDefault();
      Axios.post(`http://localhost:2020/lucky-db/save`, {newUser})
        .then( res => {
            console.log('Usuario registrado correctamente');
        }).catch(err => {
            console.log('No se pudo registrar al usuario');
        });

  }

  return (
    <div className="content">
      <div className="logo-container">
        <Link to="/inicio" className="logo-lucky">
          <img src={logoLucky} alt="logo confirmado" />
        </Link>
      </div>
      <h1 className="title-form">Crear Cuenta</h1>

      <form className="register-form" onSubmit={sendData}>
        <div className="profile-container">
          <input 
          type="file" 
          name="image" 
          onChange={collectingData}
          />
        </div>

        <div className="input-container">
          <input
            type="text"
            className="data-form"
            name="username"
            id="user_name"
            placeholder="Nombre de Usuario"
            required
            minLength="3"
            maxLength="15"
            onChange={collectingData}
          />
          <div className="image">
            <img className="check" src={check} alt="logo confirmado" />
          </div>
        </div>

        <div className="input-container">
          <input
            type="text"
            className="data-form"
            name="name"
            id="name"
            placeholder="Nombre"
            required
            minLength="3"
            maxLength="15"
            onChange={collectingData}
          />
          <div className="image">
            <img className="check" src={check} alt="logo confirmado" />
          </div>
        </div>

        <div className="input-container">
          <input
            type="text"
            className="data-form"
            name="surname"
            id="surname"
            placeholder="Apellidos"
            required
            minLength="3"
            maxLength="30"
            onChange={collectingData}
          />
          <div className="image">
            <img className="check" src={check} alt="logo confirmado" />
          </div>
        </div>

        <div className="input-container">
          <input
            type="text"
            className="data-form"
            name="birthday"
            id="date"
            placeholder="Fecha de Nacimiento"
            required
            pattern="(0?[1-9]|[12][0-9]|3[01])[-\\/ ]?(0?[1-9]|1[0-2])[-/ ]?(?:19|20)[0-9]{2}"
            onChange={collectingData}
          />
          <div className="image">
            <img className="check" src={check} alt="logo confirmado" />
          </div>
        </div>

        <div className="input-container">
          <input
            type="text"
            className="data-form"
            name="email"
            id="email"
            placeholder="Email"
            required
            pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
            onChange={collectingData}
          />
          <div className="image">
            <img className="check" src={check} alt="logo confirmado" />
          </div>
        </div>

        <div className="input-container">
          <input
            type="password"
            className="data-form"
            name="password"
            id="password"
            placeholder="Contraseña"
            required
            pattern="^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$"
            onChange={collectingData}
          />
          <div className="image">
            <img className="check" src={ojo} alt="logo confirmado" />
          </div>
        </div>

        <div className="input-container">
          <input
            type="password"
            className="data-form"
            id="password2"
            placeholder="Repita la contraseña"
            required
            pattern="^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$"
          />
          <div className="image">
            <img className="check" src={ojo} alt="logo confirmado" />
          </div>
        </div>

        <input
          type="submit"
          className="btn-create-user-R"
          value="Crear cuenta"
        />
      </form>
    </div>
  );
}
