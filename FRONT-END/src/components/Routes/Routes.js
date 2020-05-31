import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import WelcomePage from '../../components/WelcomePage/WelcomePage';
import Register from '../Log-Register/Register/Register';
import RecoverPass from '../Log-Register/subcomponents/RecoverPass';
import Home from '../Home/Home';
import OnBoarding from '../OnBoarding/OnBoarding';
import Login from '../Log-Register/Login/LoginUser';
import AdoptionPage from '../AdoptionPage/AdoptionPage';
import SelectLogin from '../Log-Register/SelectLogin';
import Maps_map from '../Map/Maps_map';
import SubmittedForm from '../AdoptionForm/subcomponents/SubmittedForm';
import ResultsFilters from '../Filters/ResultsFilters';
import ProfilePage from '../ProfilePage/ProfilePage';
import MorePage from '../MorePage/MorePage';
import AdoptionStatus from '../AdoptionStatus/AdoptionStatus';
import AnimalProfile from '../AnimalProfile/AnimalProfile';
import AdoptionForm from '../AdoptionForm/AdoptionForm';



export default function Routes (){
    return(

    <BrowserRouter>
    
        <Switch>
            {/** Rutas MENÚ */}

            <Route exact path = '/' component={WelcomePage}/>
            <Route exact path = '/inicio' component={Home}/>
            <Route exact path = '/mapa' component={Maps_map}/>
            <Route exact path = '/adopcion' component={AdoptionPage}/>
            <Route exact path = '/perfil' component={ProfilePage}/>
            <Route exact path = '/mas' component={MorePage}/>

            {/** Rutas necesarias para componentes */}

            <Route exact path = '/tutorial' component={OnBoarding}/>
            <Route exact path = '/login' component={SelectLogin}/>
            <Route exact path = '/login-usuario' component={Login}/>
            <Route exact path = '/registro' component={Register}/>
            <Route exact path = '/registro/recuperar-contraseña' component={RecoverPass}/>
            <Route exact path = '/estado-adopcion' component={AdoptionStatus}/>
            <Route exact path = '/form' component={SubmittedForm}/>
            <Route exact path = '/filtros' component={ResultsFilters}/>
            <Route exact path = '/perfil-animal/:id' component={AnimalProfile}/>
            <Route exact path = '/formulario-adopcion' component={AdoptionForm}/>

            {/** Rutas para pruebas*/}
        
        </Switch>
    
        </BrowserRouter>
    )
}
