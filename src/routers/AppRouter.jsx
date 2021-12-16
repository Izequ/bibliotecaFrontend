import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { startChecking } from '../actions/auth';
import { AñadirPrestamoScreen } from '../components/dashbord/AñadirPrestamoScreen';
import { DashboardScreen } from '../components/dashbord/DashboardScreen';
import { LibrosScreen } from '../components/dashbord/LibrosScreen';
import { PresatamosScreen } from '../components/dashbord/PresatamosScreen';

import Login from '../components/login/login';
import HomePage from '../page/home/home';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
export const AppRouter = () => {


    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])

    
    return (
        <Router>
            <div>
                <Switch>
                   
                   


                    <PublicRoute 
                        exact 
                        path="/" 
                        component={ HomePage } 
                        isAuthenticated={ !!uid }
                    />
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ Login}
                        isAuthenticated={ !!uid }/>
                     
                     <PrivateRoute 
                        exact 
                        path="/home" 
                        component={ DashboardScreen }
                        isAuthenticated={ !!uid }
                        />
                        <PrivateRoute 
                        exact 
                        path="/libros" 
                        component={ LibrosScreen }
                        isAuthenticated={ !!uid }
                        />
                        <PrivateRoute 
                        exact 
                        path="/prestamos" 
                        component={ PresatamosScreen }
                        isAuthenticated={ !!uid }
                        />
                         <PrivateRoute 
                        exact 
                        path="/add" 
                        component={ AñadirPrestamoScreen }
                        isAuthenticated={ !!uid }
                        />



                <Redirect to="/" />  {/* Redireccion al login */}
               
                </Switch>
            </div>
    </Router>
    )
}