import { types } from '../types/types';

const initialState = {
    users: [],
    activeUser: {
        id:null
    }
};


export const userReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.userSetActive:
            return {
                ...state,
                activeUser: action.payload
            }
        
        case types.userAddNew:
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]
            }
    
        case types.userClearActiveuser:
            return {
                ...state,
                activeUser: {id:null}
            }


        case types.userUpdated:
            return {
                ...state,
                users: 
                state.users.map(
                    (e) => ( e.id === action.payload.id  ) ? action.payload : e
                )
            }
        
            case types.userDeleted:
                return {
                    ...state,
                    users: state.users.filter(
                    (e) => ( e.id !== action.payload.id  )
                    ),
                    activeUser: {id:null}
                }

        case types.userLoaded:
            return {
                ...state,
                users: [ ...action.payload ]
            }

        case types.userLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }


}
