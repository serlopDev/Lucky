import React from 'react';
import '../../styles/Maps_map.scss';
import Menu from '../Menu/Menu';
import MapSimple from './subcomponents/MapSimple';
import SearchBarMaps from './subcomponents/SearchBarMaps';

export default function Maps_map () {
    return(
    <div>
        <SearchBarMaps/>
        <MapSimple/>
        <Menu/>  
    </div>
    )
}