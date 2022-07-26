import './css/global.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Empresa from './pages/Empresa';
import Empresas from "./pages/Empresas";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import Card from "./pages/Card";

function App(){
    const [empresa, setEmpresa] = useState()
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Empresas setEmpresa={setEmpresa}/>}/>
                <Route path={"/cadastro"} element={<Empresa empresa={empresa}/>}/>
                <Route path={"/card"} element={<Card empresa={empresa}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

