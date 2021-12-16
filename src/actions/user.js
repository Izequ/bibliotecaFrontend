import Swal from 'sweetalert2';

import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';



export const userStartLoading = () => {
       

    return async(dispatch) => {
        
        try {
            
            const resp = await fetchConToken( 'usuarios' );
            const body = await resp.json();
           
            
           
            
            dispatch( userLoaded( body.users ) );

        } catch (error) {
            console.log(error)
        }

    }
}



const userLoaded = (users) => ({
    type: types.userLoaded,
    payload: users
})


export const StartUpdate = ( user ) => {
    return async(dispatch) => {
        

        try {
            const resp = await fetchConToken(`usuarios/${ user.id }`, user, 'PUT' );
          
            const body = await resp.json();

            if ( body.ok ) {
                if (user.delete===true) {
                 
                    dispatch( userUpdated( user ) );
                    dispatch( userDelete() );
                }
                dispatch( userUpdated( user ) );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}

const userUpdated = ( user) => ({
    type: types.userUpdated,
    payload: user
});
const userDelete = ( ) => ({
    type: types.userDeleted
});

export const userSetActive = (user) => ({
    type: types.userSetActive,
    payload: user
});




export const userClearActiveEvent = () => ({ type: types.userClearActiveuser });