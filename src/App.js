import "./App.css";
import React, { useState } from "react";
import NavegacioBar from "./components/NavegacioBar/NavegacioBar";
import { urlsApp } from "./constants/Rutas";
import { Navigate,Route, Routes, BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/Estils";


/*Vistas*/
import Login from "./Vistes/Login";
import SignUp from "./Vistes/SignUp";
import Inici from "./Vistes/Inici";
import Profile from "./Vistes/Profile";
import NotFound from "./Vistes/404";

/*Contextos*/
import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState() ;

console.log("App.js: "+user)
console.log(user === undefined)
 
  return (
    <UserContext.Provider value={{user, setUser}}>
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavegacioBar titol="Cloud Line">
      
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
