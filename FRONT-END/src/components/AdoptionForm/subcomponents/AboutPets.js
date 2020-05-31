import React from 'react';
import '../../../styles/AdoptionForm.scss';

export default function AboutPets () {
    
    return(
    <div className='component-form'>
            <div className='progress'>
                <span className='progress-bar-AP'/>
                <span className='remaining-progress-AP'/>
            </div>

    <div className='component-form'>

        <div className='form-container-AF'>
            
        <h3>Sobre las mascotas</h3>

        <div className='other-animals-AP'>
            <h3>¿Tienes otros animales?</h3>

            <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='visit_yes'/>
                    <label for='visit_yes'><span></span>Sí</label>
                    </p>
                    
                </div>
                <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='visit_no'/>
                    <label for='visit_no'><span></span>No</label>
                    </p>
                </div>
        </div>

            <div className='input-container-AP'>
            <input type='text' className='input-form-AP' placeholder='¿Cuáles?'/>
            </div>

            <div className='input-container-AP'>
            <input type='text' className='input-form-AP' placeholder='¿Se llevan bien con otros animales?'/>
            </div>

            <div className='input-container-AP-2'>
                <p className='title-input-AP'>¿Por qué has elegido adoptar?</p>
                <input type='text' className='input-form-AP'/>
            </div>

            <div className='input-container-AP-2'>
                <p className='title-input-AP'>¿Conoces las necesidades del animal?</p>
                <input type='text' className='input-form-AP'/>
            </div>

            <div className='input-container-AP-2'>
                <p className='title-input-AP'>¿Conoces sus gastos?</p>
                <input type='text' className='input-form-AP'/>
            </div>

            <div className='input-container-AP-2'>
                <p className='title-input-AP'>¿Conoces su alimentación?</p>
                <input type='text' className='input-form-AP'/>
            </div>
        </div>
    </div>

    </div>
    )
}