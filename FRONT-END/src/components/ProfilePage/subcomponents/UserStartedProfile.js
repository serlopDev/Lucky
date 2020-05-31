import React from 'react';
import '../../../styles/ProfilePage.scss';

import profileIco from '../../../assets/icons_svg/user.svg';
import chica from '../../../assets/icons_svg/chica.svg';
import localizacion from '../../../assets/icons_svg/localization.svg';
import favoritos from '../../../assets/icons_svg/favoritosCopy.svg';
import notificaciones from '../../../assets/icons_svg/notification.svg';
import mascota from '../../../assets/icons_svg/mascota_2.svg';
import apdrina from '../../../assets/icons_svg/apadrina.svg';
import donar from '../../../assets/icons_svg/donar.svg';
import adelante from '../../../assets/icons_svg/adelante.svg';

export default function UserStartedProfile () {

    return(
        
    <div className='total-container'>

        <div className='content'>

        <img className='img-profile' src={profileIco}  alt='imagen de usuario'/>

        <div className='user-data-container'>
            <img className='data-ico' src={chica} alt='icono'/>
            <h2>Mi perfil</h2>
            <img className='adelante-arrow' src={adelante} alt='icono'/>
        </div>

        <div className='user-data-container'>
            <img className='data-ico' src={localizacion} alt='icono'/>
            <h2>Direcciones</h2>
            <img className='adelante-arrow' src={adelante} alt='icono'/>
        </div>

        <div className='user-data-container'>
            <img className='data-ico' src={favoritos} alt='icono'/>
            <h2>Favoritos</h2>
            <img className='adelante-arrow' src={adelante} alt='icono'/>
        </div>

        <div className='user-data-container'>
            <img className='data-ico' src={notificaciones} alt='icono'/>
            <h2>Notificaciones</h2>
            <img className='adelante-arrow' src={adelante} alt='icono'/>
        </div>

        <div className='user-data-container'>
            <img className='data-ico' src={mascota} alt='icono'/>
            <h2>Estado de la adopción</h2>
            <img className='adelante-arrow' src={adelante} alt='icono'/>
        </div>

        <div className='user-data-container'>
            <img className='data-ico' src={apdrina} alt='icono'/>
            <h2>Apadrinar</h2>
            <img className='adelante-arrow' src={adelante} alt='icono'/>
        </div>

        <div className='user-data-container'>
            <img className='data-ico' src={donar} alt='icono'/>
            <h2>Donar</h2>
            <img className='adelante-arrow' src={adelante} alt='icono'/>
        </div>

        </div>
    </div>
    )
}