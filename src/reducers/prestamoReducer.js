import { types } from '../types/types';

const initialState = {
    prestamos: [],
    activeprestamo: {
        id:null
    }
};


export const prestamoReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.prestamoSetActive:
            return {
                ...state,
                activeprestamo: action.payload
            }
        
        case types.prestamoAddNew:
            return {
                ...state,
                prestamos: [
                    ...state.prestamos,
                    action.payload
                ]
            }
    
        case types.prestamoClearActiveprestamo:
            return {
                ...state,
                activeprestamo: {id:null}
            }


        case types.prestamoUpdated:
            return {
                ...state,
                prestamos: 
                state.prestamos.map(
                    (e) => ( e.id === action.payload.id  ) ? action.payload : e
                )
            }
        
            case types.prestamoDeleted:
                return {
                    ...state,
                    prestamos: state.prestamos.filter(
                    (e) => ( e.id !== action.payload.id  )
                    ),
                    activeprestamo: {id:null}
                }

        case types.prestamoLoaded:
            return {
                ...state,
                prestamos: [ ...action.payload ]
            }

        case types.prestamoLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }


}