import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { prestamoStartLoading, StartUpdate } from '../../actions/prestamo';

export const PresatamosScreen = () => {

    const dispatch = useDispatch(); 
    const { prestamos } = useSelector( (state) => state.prestamo );

 

    useEffect(() => {
        dispatch( prestamoStartLoading());
    
        
    }, [dispatch])

    const handleUpdate =(prestamo)=>
    {   prestamo.estado=0
        Swal.fire({
            title: 'Estas seguro?',
            text: "Tu accion no podra ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Entregar!'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(StartUpdate(prestamo))
              
              Swal.fire(
                'Entregado!',
                'Tu libro fue entregado Con Exito.',
                'success'
              )
            }
          })
    } 


    return (
        <div>
             <section class="section__table">
        <h3>Prestamos</h3>

        <div class="busqueda">
            <Link to="/add">
            <button>Añadir</button>
            </Link>
        </div>        

        <table class="inf-table">        
        <thead>
            <tr class="table__head">
                <th>Id</th>
                <th>User id</th>
                <th>Nombre Usuario</th>
                <th>Libro id</th>
                <th>Nombre Libro</th>                
                <th>Fecha Prestamo</th>
                <th>Fecha Entrega</th>
                <th>Estado</th>
                <th></th>
                
            </tr>
            </thead>  
            <tbody>
            {prestamos.map((prestamo,index) => (      
            <tr key={index} class="table__info">
                <td>{prestamo.id}</td>
                <td>{prestamo.user_id}</td>
                <td>{prestamo.usuario.nombre_user}</td>
                <td>{prestamo.libro_id}</td>
                <td>{prestamo.libro.nombre_libro}</td>
                <td>{prestamo.fecha_solicitud}</td>
                <td>{prestamo.fecha_entrega}</td>
                <td>{prestamo.estado===1?"Activo":"Inactivo"}</td>
            
               {prestamo.estado===1 && <td><button onClick={()=>{handleUpdate(prestamo)}}>Entregar</button></td>}
                
            </tr>))}
                </tbody>  
        </table>
    </section>
        </div>
    )
}
