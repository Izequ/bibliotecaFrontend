import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { libroReducer } from './libroReducer';
import { prestamoReducer } from './prestamoReducer';
import { userReducer } from './userReducer';



// combina todos los reducers
export const rootReducer = combineReducers({
    
    auth: authReducer,
    user:userReducer,
    libro:libroReducer,
    prestamo:prestamoReducer
  
})