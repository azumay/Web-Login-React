import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Servicio from "./../components/Servicios/Servicios";
import { Link } from "react-router-dom";
import { urlsApp } from "./../constants/Rutas";


export default function NotFound(props) {
  const codi = `function Cuadro(props)
{
    const { color } = props;
}
`;
  return (
    <div className="container">
      <div className="row">
        <h1 className="mb-5">Error 404</h1>
        <div className="col-md-6 mb-5">
        <Link to="/">Volver</Link>
        </div>
        </div>
    </div>
  );
}
