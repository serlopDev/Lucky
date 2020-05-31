import React from 'react';
import '../../../styles/Maps_map.scss';

export default function SearchBarMaps () {

    return(
        <div className='content'>
            <div className='bar-container'>
                <input type='search' className='search-bar-maps' placeholder='¿Que estás buscando?'/>
                <span className='icon-filtros '/>
            </div>
        </div>
    )
}