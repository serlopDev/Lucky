import React from 'react';
import '../../../styles/AdoptionForm.scss';
import formImg from '../../../assets/img/formulario/undrawPlayfulCatRchv.svg';
import { Link } from 'react-router-dom';

export default function SubmittedForm () {

    return(
        <div className='floating-box-SF'>
        <div className='pop-up-container'>

            <div className='close-pop-up'>
                <Link to= '/adopcion'>
                    <h3>X</h3>
                </Link>
            </div>

            <h2>¡Enviado!</h2>
            <p>
                Hemos enviado tu formulario a la protectora. Si quieres ponerte en contacto con ellos puedes hacerlo vía email o whatsapp.
            </p>
            <p>
            Recuerda que la protectora se pondrá en contacto contigo para poder hacer la entrevista personal.
            </p>
            
            <img src={formImg} alt=''/>
        </div>
        </div>
    )
}
