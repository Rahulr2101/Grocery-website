import React from 'react';
import './App.css';

// import Navbar from "./Navbar"
// import Navbar from "./Navbar"
import Home from './home';
import {AuthProvider} from './context/AuthContext'
import Signup from './signup';

import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Hero from './hero';

function App(){
  return(
    <>
  
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </AuthProvider>
        </BrowserRouter>
    
    </>
  )
}

export default App;
