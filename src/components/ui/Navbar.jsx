import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import "../../assets/css/style.css";

export const Navbar = () => {
    const dispatch = useDispatch(); 
    const [nav, setNav] = useState(false)

    const handleStyle = ()=>{
        if (!nav) {
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }else{
            document.body.style.backgroundColor = "white";
        }
        setNav(!nav)
      
    }
    useEffect(() => {
        document.body.style.backgroundColor = "white";
       
    }, [])
    return (
        <div>
                

        <div id="mySidenav" className={(nav)?"sidenav pruebaNav":"sidenav"}>
            <span className="closebtn" onClick={handleStyle}>&times;</span>
            <ul>
             
                <li> <Link onClick={handleStyle}  to="/home">Usuarios</Link></li>
                <li><Link  onClick={handleStyle} to="/libros">Libros</Link></li>
             
                <li><Link  onClick={handleStyle} to="/prestamos">Prestamos</Link></li>
            </ul>
          </div>

          <div className="header__info">
            <span className='pruebaNav2' onClick={handleStyle}>&#9776; </span>

            <h1>Biblioteca Virtual</h1>

            <nav>
                <ul className="nav-right-section">
                    <li>
                        <Link to="/home">Inicio</Link>
                    </li>
                   
                    <li>
                        <a onClick={()=>dispatch(startLogout())}>Salir</a>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8ESSmr35YUzWKghh3ofPoHTlQtTz8_ViAgkRt1oq0SbQIR4WK1FIOb4eju0guFsak80&usqp=CAU" alt=""/>
                        </a>
                    </li>
                </ul>
            </nav>
          </div>
    



        
        


        </div>
    )
}