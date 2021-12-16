import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { libroStartLoading } from '../../actions/libros';
import { userStartLoading } from '../../actions/user';
import Select from 'react-select'
import { useForm } from '../../hooks/userForm';
import { Link } from 'react-router-dom';
import { startRegisterPrestamo } from '../../actions/prestamo';
export const AñadirPrestamoScreen = () => {
    const dispatch = useDispatch(); 
    const { users } = useSelector( (state) => state.user );
    const { libros } = useSelector( (state) => state.libro );

    
    const initialState ={   
        userid:'',
        libroid:'',
        fecha_entrega:''
        
    }
    const [registerValue,handleRegisterInputChange,setvalue]=useForm(initialState);
    const {userid,libroid,fecha_entrega} = registerValue;

    const handleusereChange= async(e)=>{
     
        await setvalue({...registerValue, userid:e.value});
     
    }
    const handlelibroeChange= async(e)=>{
     
        await setvalue({...registerValue, libroid:e.value});
     
    }


    
    const handleRegister = ( e ) => {
        e.preventDefault();
      
        dispatch(startRegisterPrestamo(userid,libroid,fecha_entrega));
       
    }

    useEffect(() => {
        dispatch( userStartLoading());
        dispatch( libroStartLoading());
    
        
    }, [dispatch])
    const usuarios = users.map((item)=>{ return {value:item.id, label:item.documento, id:item.id } });
    const libros1 = libros.map((item)=>{ return {value:item.id, label:item.isb, id:item.id } });

    return (
        <div>
             <section class="section__table">
        
        <div>
            <form onSubmit={handleRegister}>
                <h3>Agregar Prestamo</h3>
    
    
                <div class="row">
    
                  <div class="col-md-6">
                    
                    <h4>Usuario</h4>
                    
                    <div class="form-group input">
                    <Select
                                           options={usuarios}
                                           
                                           onChange= {handleusereChange}
                                        />
                    </div>

                            
                    
                    <br/>
      
                  </div>
      
      
                  
                  <div class="col-md-6">
                    <h4>Libro</h4>
    

                    <div class="form-group input">
                  
                    <Select
                                           options={libros1}
                                           
                                           onChange= {handlelibroeChange}
                                        />
                        {/* {libros.map((libro)=>{
                            return <option name={"libro"}  value={libro.id}  >{libro.isb}</option>
    
                        })} */}
                      
                     
                   
                    </div>
                    
                    <div class="form-group input">
                      <label for="exampleInputTel1">Fecha Entrega</label>
                      <input type="date" class="form-control" name="fecha_entrega" onChange={handleRegisterInputChange} value={fecha_entrega} id="fecha_entrega	" required/>
                  </div>  
    
                  </div>
    
                </div>    
                                       
                  
                <div class="botones">
                 <button type="submit" onClick={handleRegister} class="btn btn-success">Guardar</button>
                <Link to="/prestamos">  <button type="button" class="btn btn-danger">Volver</button> </Link>
                </div>
        
                
    
              </form>
        </div>


    </section>

        </div>
    )
}
