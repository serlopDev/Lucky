import React from 'react';
import '../../../styles/ResultsFilters.scss';

export default function Animals(props) {

    const animalList = [];

    for(let i = 0; i < props.animals.length; i++){
       const animal = props.animals[i];
       const animalFoto = `http://localhost:2020/${animal.image}`;
       const name = animal.name.replace(/\b\w/g, l => l.toUpperCase());
       const city = animal.city.replace(/\b\w/g, l => l.toUpperCase());
       animalList.push(
           <div key={i} className='animals-container-filters'>
                 <div className='animal-profile-filters'>
                    <div className='img-wrap-filters'>
                        <img className='bbdd-img-filters' src={animalFoto} alt=''/>
                    </div>
                    <div className='bbdd-text-filters'>
                        <h2>{name}</h2>
                        <p>{city}</p>
                    </div>
                </div>
           </div>
       );
    }

    return(
        <div className='content'>
            {animalList}
        </div>
    )
}