import React from 'react';
import '../../../styles/MorePage.scss';

import chica from '../../../assets/icons_svg/chica.svg';
import localizacion from '../../../assets/icons_svg/localization.svg';
import favoritos from '../../../assets/icons_svg/favoritosCopy.svg';
import notificaciones from '../../../assets/icons_svg/notification.svg';
import mascota from '../../../assets/icons_svg/mascota_2.svg';
import adelante from '../../../assets/icons_svg/adelante.svg';

export default function UserStartedMorePage () {

    return(  
        <div className='margin-corrector'>
           <div className='content'>   
             
             <div className='more-data-container '>
                 <img className='data-ico' src={chica} alt='icono'/>
                 <h2>Asociaciones protectoras</h2>
                 <img className='adelante-arrow' src={adelante} alt='icono'/>
             </div>
     
             <div className='more-data-container '>
                 <img className='data-ico' src={localizacion} alt='icono'/>
                 <h2>Eventos</h2>
                 <img className='adelante-arrow' src={adelante} alt='icono'/>
             </div>
     
             <div className='more-data-container '>
                 <img className='data-ico' src={favoritos} alt='icono'/>
                 <h2>Curiosidades</h2>
                 <img className='adelante-arrow' src={adelante} alt='icono'/>
             </div>
     
             <div className='more-data-container '>
                 <img className='data-ico' src={notificaciones} alt='icono'/>
                 <h2>Ayuda</h2>
                 <img className='adelante-arrow' src={adelante} alt='icono'/>
             </div>
     
             <div className='more-data-container '>
                 <img className='data-ico' src={mascota} alt='icono'/>
                 <h2>Configuración</h2>
                 <img className='adelante-arrow' src={adelante} alt='icono'/>
             </div>
     
             </div>
         </div>
         )
}