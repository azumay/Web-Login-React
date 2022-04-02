import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Servicio from "../components/Servicios/Servicios";
import { Link } from "react-router-dom";
import Input from "../components/Form/Input";

import {
  Formulario,
  Boton,
  MensajeExito,
  MensajeError,
} from "./../components/Form/EstilosForm";


export default function Inici(props) {

  const [formularioValido, cambiarFormularioValido] = useState(null);

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,12}$/, // 5 a 12 digitos. Mayus y minusculas No simbolos
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };
  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  const onSubmit = (e) => {
		e.preventDefault();

    
    
		if(

			nombre.valido === 'true' &&
      apellido.valido === 'true' &&
			password.valido === 'true' &&
			password2.valido === 'true' &&
			correo.valido === 'true' 
			
		){
     
         fetch("http://192.168.50.129:8080/users/register", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Nombre: nombre.campo,
            Apellido: apellido.campo,
            Mail: correo.campo,
            Password: password.campo,
          }),
        });
     
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
			cambiarPassword({campo: '', valido: null});
			cambiarPassword2({campo: '', valido: 'null'});
			cambiarCorreo({campo: '', valido: null});
	
		} else {
			cambiarFormularioValido(false);
		}
	}

  return (
    <div className="container">
      <div className="row">
        <h1 className="mb-5">Formulario de registro</h1>

        <Servicio img="signup.png" titulo="Sign up" />

        <Formulario action="" onSubmit={onSubmit}>
          <Input
            estado={nombre}
            cambiarEstado={cambiarNombre}
            tipo="text"
            label="Nombre"
            placeholder="Jhon"
            name="Nombre"
            leyendaError="El nombre solo puede contener letras y espacios."
            expresionRegular={expresiones.nombre}
          />
         
          <Input
            estado={apellido}
            cambiarEstado={cambiarApellido}
            tipo="text"
            label="Apellido"
            placeholder="Smith"
            name="Apellido"
            leyendaError="El apellido solo puede contener letras y espacios."
            expresionRegular={expresiones.nombre}
          />

          <Input
            estado={correo}
            cambiarEstado={cambiarCorreo}
            tipo="email"
            label="Correo Electrónico"
            placeholder="john@correo.cat"
            name="correo"
            leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
            expresionRegular={expresiones.correo}
          />
          <Input
            estado={password}
            cambiarEstado={cambiarPassword}
            tipo="password"
            label="Contraseña"
            name="password1"
            leyendaError="La contraseña debe tener entre 5 y 12 caracteres, una mayúscula y sin símbolos."
            expresionRegular={expresiones.password}
          />
          <Input
            estado={password2}
            cambiarEstado={cambiarPassword2}
            tipo="password"
            label="Repetir Contraseña"
            name="password2"
            leyendaError="Ambas contraseñas deben ser iguales."
            funcion={validarPassword2}
          />
           <Boton type="submit">Enviar</Boton>
        </Formulario>
       
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
}
