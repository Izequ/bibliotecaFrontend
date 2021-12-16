import Swal from 'sweetalert2';

import { types } from '../types/types';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';







export const startRegisterPrestamo = (user_id, libro_id, fecha_entrega ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'prestamo/', {user_id, libro_id, fecha_entrega}, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
          
            Swal.fire({   position: 'center',   icon: 'success',   title: 'Registro Exitoso',   showConfirmButton: false,   timer: 1500 })

             
        } else {
            Swal.fire('Error', body.msg, 'error');
        }


    }
}

export const prestamoStartLoading = () => {
       

    return async(dispatch) => {
        
        try {
            
            const resp = await fetchConToken( 'prestamo' );
            const body = await resp.json();
           
            
           
            
            dispatch( prestamoLoaded( body.prestamos ) );

        } catch (error) {
            console.log(error)
        }

    }
}



const prestamoLoaded = (prestamos) => ({
    type: types.prestamoLoaded,
    payload: prestamos
})


export const StartUpdate = ( prestamo ) => {
    return async(dispatch) => {
        
     

        try {
            const resp = await fetchConToken(`prestamo/${ prestamo.id }`, prestamo, 'PUT' );
          
            const body = await resp.json();

            if ( body.ok ) {
                if (prestamo.delete===true) {
                 
                    dispatch( prestamoUpdated( prestamo ) );
                    dispatch( prestamoDelete() );
                }
                dispatch( prestamoUpdated( prestamo ) );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}

const prestamoUpdated = ( prestamo) => ({
    type: types.prestamoUpdated,
    payload: prestamo
});
const prestamoDelete = ( ) => ({
    type: types.prestamoDeleted
});

export const prestamoSetActive = (prestamo) => ({
    type: types.prestamoSetActive,
    payload: prestamo
});




export const prestamoClearActiveEvent = () => ({ type: types.prestamoClearActiveprestamo });