import React from 'react';
import '../../../styles/AdoptionPage.scss';
import { Link } from 'react-router-dom';

export default function AnimalsAdoptionList (props) {

    function capitilice(word){
        if(typeof word !== 'string') return ''
        return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    }

    const animals = [];
    for(let i = 0; i < props.adoptionAnimals.length; i++){
        const animal = props.adoptionAnimals[i];
        const name = capitilice(animal.name);
        const city = capitilice(animal.city);
        const animalImage = `http://localhost:2020/${animal.image}`;

        animals.push(
            <div key={i} className='animals-container'>
                <Link to={`/perfil-animal/${animal._id}`}>
                <div className='animal-profile'>
                    <div className='img-wrap'>
                        <img className='bbdd-img' src={animalImage} alt=''/>
                    </div>
                    <div className='bbdd-text'>
                        <h2>{name}</h2>
                        <p>{city}</p>
                    </div>
                </div>
                </Link>   
        </div>
        )
    };
    return(
        <div className='content'>
            {animals}
        </div>
    )
}