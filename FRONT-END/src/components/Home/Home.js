import React from 'react';
import '../../styles/Home.scss';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import HomeTitle from './subcomponents/HomeTitle';
import Notices from './subcomponents/Notices';
import Menu from '../../components/Menu/Menu';
import slidePerro from '../../assets/img/slides_home/perro.png';
import slideApadrina from '../../assets/img/slides_home/apadrina.png';
import slideProtectoras from '../../assets/img/slides_home/protectoras.png';

export default function Home () {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
      };

    return(

      <div>
        <HomeTitle/>
        
        <Slider {...settings}>

          <div>
          <div className='slide-container'>
            <Link to = '/estado-adopcion' className='slide-container'>
            <img className='slide-animal' src={slidePerro} alt='slider de animal'/>
            </Link>
          </div>
          </div>

          <div>
          <div className='slide-container'>
          <Link to='/adopcion' className='slide-container'>
            <img className='slide-animal' src={slideApadrina} alt='slider de animal'/>
          </Link>
          </div>
          </div>

          <div>
          <div className='slide-container'>
          <Link to='/mapa' className='slide-container'>
            <img className='slide-animal' src={slideProtectoras} alt='slider de animal'/>
          </Link>
          </div>
          </div>

        </Slider>

        <Notices/>
        <Menu/>
      </div>
    )
}