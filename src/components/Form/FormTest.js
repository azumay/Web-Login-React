import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SignUpForm() {

  const [Nombre, setNombre] = React.useState([]);
  const [Apellido, setApellido] = React.useState([]);
  const [Mail, setMail] = React.useState([]);
  const [Password, setPassword] = React.useState([]);

  /*Control de cambios en los valores de los inputs*/

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleChangeMail = (event) => {
    setMail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };


  const postData = async () => {
    await fetch("http://192.168.50.129:8080/users/register", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Nombre: Nombre,
        Apellido: Apellido,
        Mail: Mail,
        Password: Password,
      }),
    });
  };

  return (
    <div className="containerForm">
      
      <TextField
        id="outlined-basic"
        name="Nombre"
        label="Nombre"
        required
        value={Nombre}
        onChange={handleChangeNombre}
        variant="outlined"
      />

      <TextField
        id="outlined-basic"
        name="Apellido"
        label="Apellido"
        required
        value={Apellido}
        onChange={handleChangeApellido}
        variant="outlined"
      />

      <TextField
        id="outlined-basic"
        name="Mail"
        label="Mail"
        required
        type="email"
        value={Mail}
        onChange={handleChangeMail}
        variant="outlined"
      />

      <TextField
        id="outlined-basic"
        name="Password"
        label="Password"
        required
        type="password"
        value={Password}
        onChange={handleChangePassword}
        variant="outlined"
      />

      <div className="btn-edicio">
        <Button variant="contained" type="submit" onClick={() => postData()}>
          Enviar
        </Button>
      </div>
    </div>
  );
}
