import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userStartLoading } from '../../actions/user';

export const DashboardScreen = () => {

    const dispatch = useDispatch(); 
    const { users } = useSelector( (state) => state.user );

    console.log(users);

    useEffect(() => {
        dispatch( userStartLoading());
    
        
    }, [dispatch])





    return (
        <div>
            <section class="section__table">
        <h3>Usuarios</h3>
        <table class="inf-table">  
        <thead>
            <tr class="table__head">
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Documento</th>
                <th>Rol</th>
                <th>Email</th>
                <th></th>
            </tr>
            </thead>          
            <tbody>
        {users.map((user,index) => (

             <tr key={index} class="table__info">
             <td>{user.id}</td>
             <td>{user.nombre_user}</td>
             <td>{user.apellido}</td>
             <td>{user.documento}</td>
             <td>{(user.rol===0)?"Admin":"Usuario"}</td>
             <td>{(user.email)}</td>
             <td><button>Editar</button></td>
         </tr>
        ))   }
        </tbody>
        </table>
    </section>
        </div>
    )
}
