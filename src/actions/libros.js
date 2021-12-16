import Swal from 'sweetalert2';

import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';



export const libroStartLoading = () => {
       

    return async(dispatch) => {
        
        try {
            
            const resp = await fetchConToken( 'libro' );
            const body = await resp.json();
            console.log(body)
           
            
           
            
            dispatch( libroLoaded( body.libros ) );

        } catch (error) {
            console.log(error)
        }

    }
}



const libroLoaded = (libros) => ({
    type: types.libroLoaded,
    payload: libros
})


export const StartUpdate = ( libro ) => {
    return async(dispatch) => {
        

        try {
            const resp = await fetchConToken(`usuarios/${ libro.id }`, libro, 'PUT' );
          
            const body = await resp.json();

            if ( body.ok ) {
                if (libro.delete===true) {
                 
                    dispatch( libroUpdated( libro ) );
                    dispatch( libroDelete() );
                }
                dispatch( libroUpdated( libro ) );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}

const libroUpdated = ( libro) => ({
    type: types.libroUpdated,
    payload: libro
});
const libroDelete = ( ) => ({
    type: types.libroDeleted
});

export const libroSetActive = (libro) => ({
    type: types.libroSetActive,
    payload: libro
});




export const libroClearActiveEvent = () => ({ type: types.libroClearActivelibro });