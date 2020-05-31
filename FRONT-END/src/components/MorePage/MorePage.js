import React from 'react';
import '../../styles/MorePage.scss';
import Menu from '../Menu/Menu';
import OutSessionMorePage from './subcomponents/OutSessionMorePage';

export default function MorePage () {
 
    return(
        <div>
            <OutSessionMorePage/>
            <Menu/>
        </div>
    )
}