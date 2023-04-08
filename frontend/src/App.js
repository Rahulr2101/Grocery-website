import React from 'react';
import './App.css';

// import Navbar from "./Navbar"
// import Navbar from "./Navbar"
import Home from './home';



import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Hero from './hero';

function App(){
  return(
    <>
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/home' element={<Home/>}/>
      </Routes>
        </BrowserRouter>
    
    </>
  )
}

export default App;
