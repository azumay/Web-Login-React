import "./App.css";
import React, { useState } from "react";
import NavegacioBar from "./components/NavegacioBar/NavegacioBar";
import { urlsApp } from "./constants/Rutas";
import { Navigate,Route, Routes, BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/Estils";

/*ICONOS*/
import FiberNewIcon from '@mui/icons-material/FiberNew';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

/*Vistas*/
import Login from "./Vistes/Login";
import SignUp from "./Vistes/SignUp";
import Inici from "./Vistes/Inici";
import Profile from "./Vistes/Profile";
import NotFound from "./Vistes/404";

/*Contextos*/
import UserContext from "./context/UserContext";

function App() {

  const elementsProba = [
    {
      nom: "Home",
      icona: <HomeIcon />,
      redireccio: urlsApp.inici
    }, {
      nom: "divider"
    }, {
      nom: "Sign up",
      icona: <FiberNewIcon />,
      redireccio: urlsApp.signup
    }, {
      nom: "Login",
      icona: <AccountCircleIcon />,
      redireccio: urlsApp.login
    },
  ];
  const [user, setUser] = useState() ;

 
  return (
    <UserContext.Provider value={{user, setUser}}>
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavegacioBar elementsMenu={elementsProba} titol="Login con React">
      
          <Routes>
            <Route path={urlsApp.inici} element={<Inici />} />
            <Route path={urlsApp.login} element={!user ? (<Login />) : (<Navigate replace to="/Profile" />)}/>
            <Route path={urlsApp.signup} element={<SignUp />} />
        
            <Route path={urlsApp.profile} element={user ? (<Profile/>) : (<Navigate replace to="/Login" />)}/>
            <Route path="*" element={<NotFound/>} />

          </Routes>
     
        </NavegacioBar>
      </ThemeProvider>
    </div>
    </UserContext.Provider>
  );
}

export default App;
