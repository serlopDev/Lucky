import React from 'react';
import Slider from 'react-slick';
import '../../styles/OnBoarding.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgOB1 from '../../assets/img/on_boarding/undrawGoodDoggy4Wfq.svg';
import imgOB2 from '../../assets/img/on_boarding/imagen2.svg';
import imgOB3 from '../../assets/img/on_boarding/undrawPetAdoption2Qkw.svg';
import CloseButton from './subcomponents/CloseButton';

export default function OnBoarding() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };

    return(
      <div>
      <CloseButton/>

      <Slider {...settings}>
        <div>
        <div className="onBoarding-Container" >
          <img className="imgOB" src={imgOB1}  alt='imagen tutorial'/>
          <h3 className="titleOB">Encuentra todo tipo de servicios que tienes cerca de ti</h3>
          <p className='textOB'></p>
        </div>
        </div>

        <div>
        <div className="onBoarding-Container">
          <img className="imgOB" src={imgOB2} alt='imagen tutorial'/>
          <h3 className="titleOB">Adopta desde tu móvil</h3>
          <p className='textOB'>Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti</p>
        </div>
        </div>

        <div>
        <div className="onBoarding-Container">
          <img className="imgOB" src={imgOB3} alt='imagen tutorial'/>
          <h3 className="titleOB">Si eres una asociación sube a tus peludos para darles más difusión</h3>
          <p className='textOB'></p>
        </div>
        </div>

      </Slider>
      </div>
    );
}
