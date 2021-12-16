import "../../assets/css/login.css";
import React, { useState } from "react";
import { useForm } from "../../hooks/userForm";
import { useDispatch } from "react-redux";
import { startLogin, startRegister } from "../../actions/auth";

const Login = (props) => {
  const [ButtonGet, ButtonSet] = useState(true);
  const dispatch = useDispatch();
  const [loginValue,handleLoginInputChange]=useForm(
    {
    Email:'',
    Password:''
}
);
const [RegisterValue,handleRegisterInputChange]=useForm(
  {
  Nombre:'',
  Apellido:'',
  Code:'',
  EmailR:'',
  PasswordR:''
}
);
const {Email,Password} = loginValue;
const {Nombre,Apellido,Code,EmailR,PasswordR} = RegisterValue

const handleRegister = (e)=>{
  e.preventDefault();
  dispatch( startRegister(Nombre,Apellido, Code, EmailR, PasswordR ) );
}

const handleLogin = (e)=>{
  e.preventDefault();
  dispatch( startLogin( Email, Password ) );
}






  return (
    <div className="container-login">
      <div
        className={`container ${ButtonGet ? "" : "right-panel-active"}`}
        id="container"
      >
         <div className={`form-container sign-up-container`}>
          <form onSubmit={handleRegister}>
            <h1>Crear Cuenta</h1>
            <span>Use su correo institucional para Registrarse</span>
            <input type="text" placeholder="Nombre"         required name="Nombre" value={Nombre} onChange={handleRegisterInputChange} />
            <input type="text" placeholder="Apellido"       required name="Apellido" value={Apellido} onChange={handleRegisterInputChange} />
            <input type="text" placeholder="Documento"      required name="Code" value={Code} onChange={handleRegisterInputChange} />
            <input type="email" placeholder="Email"         required name="EmailR" value={EmailR} onChange={handleRegisterInputChange} />
            <input type="password" placeholder="Contraseña" required name="PasswordR" value={PasswordR} onChange={handleRegisterInputChange} />
            <button type="submit">Registrar</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form  onSubmit={handleLogin}>
            <h1>Ingresar</h1>
            <span>Use su Correo Institucional</span>
            <input type="email" placeholder="Email"          required name="Email" value={Email} onChange={handleLoginInputChange} />
            <input type="password" placeholder="Constraseña" required name="Password" value={Password} onChange={handleLoginInputChange} />
            <a href="#">Olvidé mi Contraseña</a>
            <button type="submit">Ingresar</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>¡Ya Tengo Cuenta!</h1>
              <p>
              Para mantenerse conectado con nosotros, inicie sesión con su información personal 
              </p>
              <button className="ghost" id="signIn" onClick={() => ButtonSet(true)}>
                Ingresar
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>¡Soy Nuevo!</h1>
              <p>Ingrese sus Datos Personales y Comience su Viaje con Nosotros </p>
              <button className="ghost" id="signUp" onClick={() => ButtonSet(false)}>
                Registrarme
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
