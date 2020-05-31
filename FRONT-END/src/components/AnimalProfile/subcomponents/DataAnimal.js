import React, { useState, useEffect } from 'react';
import '../../../styles/AnimalProfile.scss';
import pawPrint from '../../../assets/img/data/pawprint@3x.png';
import Axios from 'axios';


export default function DataAnimal (props) {

    const id = props.id;

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const [animal, setAnimal] = useState({});

    function getData(){
        Axios.get(`http://localhost:2020/lucky-db/animal/${id}`)
            .then(res => {
               setAnimal(res.data.animal[0]);
            }).catch(err => {
                console.log('Ha ocurrido un error de conexión');
            });
    };

    function capitilice(word){
        if(typeof word !== 'string') return ''
        return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    };

    const specie = capitilice(animal.species);
    const birthday = animal.birthday;
    const sex = capitilice(animal.sex);
    const size = capitilice(animal.size);
    const weight = capitilice(animal.weight) + ' KG';


    return(
    <div className='margin-correct-DA'>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Especie</p>
                    <p>{specie}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Fecha de nacimiento</p>
                    <p>{birthday}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Sexo</p>
                    <p>{sex}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Tamaño</p>
                    <p>{size}</p>
                </div>
            </div>
        </div>

        <div className='data-container-DA'>
            <div className='ico-text-container'>
                <img src={pawPrint} alt=''/>
                <div className='text-container-DA'>
                    <p>Peso</p>
                    <p>{weight}</p>
                </div>
            </div>
        </div>
    </div>
    )
}