import React from "react";
import { Route,BrowserRouter, Routes, Link} from "react-router-dom";


import  Pag1  from './pages/Pag1';
import  Perguntas  from './pages/Perguntas';
import  Resultado  from './pages/Resultado';
import Perguntas2 from "./pages/Perguntas2";



const routes = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route  path="/" element={<Pag1/>} />
           <Route  path="/Perguntas" element={<Perguntas/>} />
           <Route  path="/Perguntas2" element={<Perguntas2/>}/>
           <Route  path="/Resultado" element={<Resultado/>}/>
        </Routes>    
       </BrowserRouter>
   )

}   

export default routes;