import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Input from "./../components/Form/Input";
import { Navigate,useNavigate } from "react-router-dom";

import UserContext from "../context/UserContext";

import {
  Formulario,
  Boton,
  MensajeExito,
  MensajeError,
} from "./../components/Form/EstilosForm";



export default function Login(props) {


  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  
  const onSubmit =  (e) => { 
   
    e.preventDefault();
    
    fetch("http://192.168.50.129:8080/users/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
          Mail: correo.campo,
          Password: password.campo,
        }),
      })  

    .then(function(response) {
      return  response.json();
    })
    .then(function(data) {
        setUser(data[0]);

        if (user !== undefined) {
          return navigate('/', { replace: true });
        }
    })
      .catch((error) => {
        console.log("error: " + error.message);
      });

    };

  

  return (
    <div className="container">
      <div className="row">
        <h1 className="mb-5">Iniciar sesión</h1>

        <Formulario action="" onSubmit={onSubmit} >
          <Input
            estado={correo}
            cambiarEstado={cambiarCorreo}
            tipo="email"
            label="Correo Electrónico"
            placeholder="john@correo.cat"
            name="correo"
          />
          <Input
            estado={password}
            cambiarEstado={cambiarPassword}
            tipo="password"
            label="Contraseña"
            name="password"
          />

          <Boton type="submit">Entrar</Boton>
   
        </Formulario>

        <Link to="/">Volver</Link>
      </div>
    </div>
  );
}
