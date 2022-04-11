import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Button } from "bootstrap";
import LogoutIcon from '@mui/icons-material/Logout';


export default function Login(props) {
 
  const {user, setUser} = useContext(UserContext);

  const logout = () => {
    setUser(null);
  }
  
 
  return (
    
    
    <div className="container">
      <div className="row">
        <h1 className="mb-5">Profile</h1>

        <div className="box-perfil">
          
          <h1>Datos usuario</h1>
<div className="info-user mb-5">
          <ul>
          <li className="usuario"> 
              <img src="perfil/usuarios.png" className="perfil-img" />
              <p>Nombre: <br></br> <b>{user.Nombre}</b></p>
              <p>Apellido:<br></br>  <b>{user.Apellido}</b></p>
            </li>
            <li className="mail"> 
              <img src="perfil/email.png" className="perfil-img" />
              <p>Mail: <br></br> <b>{user.Mail}</b></p>
             
            </li>
          </ul>
          <div className="logout" >
       
          <LogoutIcon onClick={logout}/>
          </div>
          </div>
        </div>

      

       
        
        

        <Link to="/">Volver</Link>

      </div>
    </div>
   
  );
}
