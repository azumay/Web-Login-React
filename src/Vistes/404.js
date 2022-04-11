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
        <div className="box-404">
        <img src="404.gif" className="notfound"/>
        <div >
        <Link to="/">Volver</Link>
        </div>
        </div>
        </div>
    </div>
  );
}
