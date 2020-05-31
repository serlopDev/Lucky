import React, { useState } from 'react';
import YourData from './subcomponents/YourData';
import AboutPets from './subcomponents/AboutPets';
import FamilyHome from './subcomponents/FamilyHome';
import SubmittedForm from './subcomponents/SubmittedForm';
import { Redirect } from 'react-router-dom';

export default function AdoptionForm () {
   
    const yd = <YourData/>
    const ap = <AboutPets/>
    const fh = <FamilyHome/>
    const popUp = <SubmittedForm/>
    const components = [yd, ap, fh];

    const [counter, setCounter] = useState(0);
    const [component, setComponent] = useState(components[0]);
    const [advertissement, setAdvertissement] = useState(false);
    const [redirect, setRedirect] = useState(false);

    function nextComponent(counter){
        const nextPage = counter + 1;
        setCounter(nextPage);
        if(counter <= 3){
           setComponent(components[nextPage]);  
        } 
        if(counter === 2 && advertissement === false){
            setAdvertissement(popUp);
            setComponent(components[2])
            
        } else {
            setAdvertissement(false);
        }
    }
   

    function previousComponent(counter) {
        const previousPage = counter - 1;
        setCounter(previousPage);
        if(counter > 0){
            setComponent(components[previousPage]);  
        } else {
            if(counter === 0 && redirect === false){
                setRedirect(<Redirect to='/adopcion'/>);
            }
        }
    }
    

    return(
        <div className='content'>

                <div className='title-container-AF'>

                        <div className='btn-atras-container-AF'>
                            <button className='icon-atras' onClick={() => previousComponent(counter)}>{redirect}</button>
                        </div>

                        <p>Formulario de adopción</p>

                </div>

        {component}
        {advertissement}

        <button className='btn-continue-AF' onClick={() => nextComponent(counter)}>Continuar</button>
        </div>
    )
}