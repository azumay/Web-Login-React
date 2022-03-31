import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Servicio from "../components/Servicios/Servicios";
import { Link } from "react-router-dom";
import FormCitaPrevia from "../components/Form/Form";

export default function Inici(props) {
 
  return (

    <div className="container">
      <div className="row">
      <h1 className="mb-5">Formulario de registro</h1>
   
      <Servicio img="signup.png" titulo="Sign up" />
      <FormCitaPrevia/>
      <Link to="/">Volver</Link>
      
    </div>
    </div>
  );
}