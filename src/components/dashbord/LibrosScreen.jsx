import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { libroStartLoading } from '../../actions/libros';

export const LibrosScreen = () => {
    const dispatch = useDispatch(); 
    const { libros } = useSelector( (state) => state.libro );

    

    useEffect(() => {
        dispatch( libroStartLoading());
    
        
    }, [dispatch])






    return (
        <div>
            <section class="section__table">
        <h3>Libros</h3>


        

        <table class="inf-table">  
        <thead>
            <tr class="table__head">
                <th>Id</th>
                <th>Nombre</th>
                <th>ISB</th>
                <th>Editor</th>                
                <th>Copias</th>
                <th>Año</th>
                <th></th>
                
            </tr>
            </thead>
            <tbody>

            {libros.map((libro,index) => (
            <tr key={index} class="table__info">
                <td>{libro.id}</td>
                <td>{libro.nombre_libro}</td>
                <td>{libro.isb}</td>
                <td>{libro.editor}</td>
                <td>{libro.copias}</td>
                <td>{libro.anio}</td>                
                <td><button>Editar</button></td>
                
            </tr>))}
                </tbody>          
        </table>
        </section>
        </div>
    )
}
