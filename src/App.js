import './App.css';

import NavegacioBar from './components/NavegacioBar/NavegacioBar';
import { urlsApp } from './constants/Rutas';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './constants/Estils'



/*Vistas*/
import Login from './Vistes/Login';
import SignUp from './Vistes/SignUp';
import Inici from './Vistes/Inici';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <NavegacioBar titol="Cloud Line" >
         
            <Routes>
              <Route path={urlsApp.inici} element={<Inici />} />
              <Route path={urlsApp.login} element={<Login  />} />
              <Route path={urlsApp.signup} element={<SignUp  />} />
            </Routes>
         
        </NavegacioBar>
      </ThemeProvider>
    </div>
  );
}

export default App;