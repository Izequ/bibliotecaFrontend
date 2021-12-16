import { types } from '../types/types';

const initialState = {
    libros: [],
    activelibro: {
        id:null
    }
};


export const libroReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.libroSetActive:
            return {
                ...state,
                activelibro: action.payload
            }
        
        case types.libroAddNew:
            return {
                ...state,
                libros: [
                    ...state.libros,
                    action.payload
                ]
            }
    
        case types.libroClearActivelibro:
            return {
                ...state,
                activelibro: {id:null}
            }


        case types.libroUpdated:
            return {
                ...state,
                libros: 
                state.libros.map(
                    (e) => ( e.id === action.payload.id  ) ? action.payload : e
                )
            }
        
            case types.libroDeleted:
                return {
                    ...state,
                    libros: state.libros.filter(
                    (e) => ( e.id !== action.payload.id  )
                    ),
                    activelibro: {id:null}
                }

        case types.libroLoaded:
            return {
                ...state,
                libros: [ ...action.payload ]
            }

        case types.libroLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }


}