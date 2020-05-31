import React from 'react';
import '../../styles/ProfilePage.scss';
import Menu from '../Menu/Menu';
import OutSesioonProfile from './subcomponents/OutSessionProfile';



export default function ProfilePage () {

    return(       
    <div className='content'>
        <OutSesioonProfile/>
        <Menu/>
    </div>
    )
}