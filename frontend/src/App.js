import React from 'react';
import './App.css';

// import Navbar from "./Navbar"
// import Navbar from "./Navbar"
import Home from './home';
import {AuthProvider} from './context/AuthContext'
import Signup from './signup';
import Context from './context/Context';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Hero from './hero';

function App(){
  return(
    <>
  
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route exact path='/' element={<Hero />} />
      <Route path='/home' element={<Context/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </AuthProvider>
        </BrowserRouter>
    
    </>
  )
}

export default App;
