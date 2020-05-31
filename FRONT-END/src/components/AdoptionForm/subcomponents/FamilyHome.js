import React from 'react';
import '../../../styles/AdoptionForm.scss';

export default function FamilyHome() {

    return(
    <div className='component-form'>

        <div className='form-container-AF'>
            
            <h3>Sobre las mascotas</h3>

            <div className='input-container-AP-2'>
                <p className='title-input-AP'>¿Donde vives?</p>
                <input type='text' className='input-form-AP' placeholder='Piso, casa, chalet...'/>
            </div>

            <div className='other-animals-AP'>
            <h3>¿Vives de alquiler?</h3>
                <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='yes'/>
                    <label for='yes'><span></span>Sí</label>
                    </p>
                    
                </div>
                <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='no'/>
                    <label for='no'><span></span>No</label>
                    </p>
                </div>
        </div>

        <div className='other-animals-AP'>
            <h3>¿Tu casero permite animales?</h3>
            <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='yes'/>
                    <label for='yes'><span></span>Sí</label>
                    </p>
                    
                </div>
                <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='no'/>
                    <label for='no'><span></span>No</label>
                    </p>
                </div>
        </div>

        <div className='other-animals-AP'>
            <h3>¿Crees que podrías mudarte pronto?</h3>
            <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='yes'/>
                    <label for='yes'><span></span>Sí</label>
                    </p>
                    
                </div>
                <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='no'/>
                    <label for='no'><span></span>No</label>
                    </p>
                </div>
        </div>

        <div className='other-animals-AP'>
            <h3>¿Tiene Jardín?</h3>
            <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='rental_yes'/>
                    <label for='rental_yes'><span></span>Sí</label>
                    </p>
                    
                </div>
                <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='rental_no'/>
                    <label for='rental_no'><span></span>No</label>
                    </p>
                </div>
        </div>

        <div className='other-animals-AP'>
            <h3>¿Vives con otras personas?</h3>
            <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='other_people_yes'/>
                    <label for='other_people_yes'><span></span>Sí</label>
                    </p>
                    
                </div>
                <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='other_people_no'/>
                    <label for='other_people_no'><span></span>No</label>
                    </p>
                </div>
        </div>

        <div className='other-animals-AP'>
            <h3>¿Están todos de acuerdo con la adopción?</h3>
            <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='all_yes'/>
                    <label for='all_yes'><span></span>Sí</label>
                    </p>
                    
                </div>
                <div className='radio-container-AP'>
                    <p>
                    <input type='radio' id='all_no'/>
                    <label for='all_no'><span></span>No</label>
                    </p>
                </div>
        </div>

        <div className='other-animals-AP'>
            <h3>¿Estás de acuerdo con que visitemos tu casa?</h3>
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
        </div>
    
    </div>
    )
}