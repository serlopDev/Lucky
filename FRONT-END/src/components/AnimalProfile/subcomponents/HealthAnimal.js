import React from 'react';
import '../../../styles/AnimalProfile.scss';
import pawPrint from '../../../assets/img/data/pawprint@3x.png';

export default function HealthAnimal (props) {

    function capitilice(word){
        if(typeof word !== 'string') return ''
        return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    }

    const vaccinated = capitilice(props.animal.vaccinated);
    const dewormed = capitilice(props.animal.dewormed);
    const healthy = capitilice(props.animal.healthy);
    const sterelized = capitilice(props.animal.sterelized);
    const identified = capitilice(props.animal.identified);
    const microchip = capitilice(props.animal.microchip);

    return(
    <div className='margin-correct-DA'>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Vacunado</p>
                    <p>{vaccinated}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Desparasitado</p>
                    <p>{dewormed}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Sano</p>
                    <p>{healthy}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Esterilizado</p>
                    <p>{sterelized}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Identificado</p>
                    <p>{identified}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Microchip</p>
                    <p>{microchip}</p>
                </div>
            </div>
        </div>

    </div>
    )
}

