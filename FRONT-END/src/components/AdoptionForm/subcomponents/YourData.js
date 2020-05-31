import React from 'react';

export default function YourData (){

    return(
    <div className='component-form'>
            <div className='progress'>
                <span className='progress-bar-AF'/>
                <span className='remaining-progress-AF'/>
            </div>
        <div className='form-container-AF'>
            
        <h3>Tus datos</h3>

            <div className='input-container-AF'>
            <input type='text' className='input-form-AF' placeholder='Nombre y apellidos'/>
            </div>

            <div className='input-container-AF'>
            <input type='text' className='input-form-AF' placeholder='Email'/>
            </div>

            <div className='input-container-AF'>
            <input type='text' className='input-form-AF' placeholder='Teléfono'/>
            </div>

            <div className='input-container-AF'>
            <input type='text' className='input-form-AF' placeholder='DNI'/>
            </div>

        <h3>Dirección</h3>

            <div className='input-container-AF'>
            <input type='text' className='input-form-AF' placeholder='Calle, número, piso'/>
            </div>
            
            <div className='input-container-AF'>
            <input type='text' className='input-form-AF' placeholder='Código postal'/>
            </div>

            <div className='input-container-AF'>
            <input type='text' className='input-form-AF' placeholder='Ciudad'/>
            </div>
        </div>

        <div className='terms-container-AF'>
            
            <p>
            <input id='checkbox-AF' type='checkbox'/>
            <label for='checkbox-AF'><span></span>Acepto los términos y condiciones de la adopción</label>
            </p>
            
        </div>
        
    </div>
    )
} 