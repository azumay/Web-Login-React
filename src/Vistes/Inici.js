import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Servicio from "./../components/Servicios/Servicios";
import { Link } from "react-router-dom";
import { urlsApp } from "./../constants/Rutas";


export default function Inici(props) {
  const codi = `function Cuadro(props)
{
    const { color } = props;
}
`;
  return (
    <div className="container">
      <div className="row">
        <h1 className="mb-5">Client React</h1>
        <div className="col-md-6 mb-5">
        <Link to="/Login">
          <Servicio img="login.png" titulo="Login" />
        </Link>
        </div>
        <div className="col-md-6 mb-5">
        <Link to="/SignUp">
          <Servicio img="signup.png" titulo="Sign up" />
        </Link>
        </div>
        </div>
    </div>
  );
}
