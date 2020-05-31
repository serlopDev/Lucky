import React from 'react';
import '../../../styles/AdoptionPage.scss';


export default function SearchBar () {

    return(
        <div className='content'>
            <div className='searchbar-container'>
                <input type='search' className='search-box' placeholder='Buscar'/>
                <span className='icon-buscar'/>
            </div>
        </div>
    )
}