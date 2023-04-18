import React, { useEffect, useState } from 'react';
import './App.css';

// import Navbar from "./Navbar"
// import Navbar from "./Navbar"
import Home from './home';
import {AuthProvider} from './context/AuthContext'
import Signup from './signup';
import Context from './context/Context';
import Navbar from './navbarshop'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Dairy from './Dairy';
import Hero from './hero';
import Veg from './vegtable'
import Snacks from './Snacks'
import Meat from './Meats'
import Meats from './Meats';
function App(){
  const [ products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);




  useEffect(() => {
    console.log("fetch")
    fetch('http://127.0.0.1:8000/products/')
      .then(response => response.json())
      .then(data => {
        setProducts(data); 
      });
  }, []);



  return(
    <>
     <div>
  
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route exact path='/' element={<Hero />} />
      <Route path='/Snacks' element={<Snacks products={products}/>}/>
    <Route path ='/Veg' element={<Veg products={products}/>}/>
      <Route path ='/Dairy' element={<Dairy products={products}/>}/>
    <Route path ='/Meat' element={<Meat products={products}/>}/>
      <Route path='/home' element={<Home products={products}/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </AuthProvider>
        </BrowserRouter>
        </div>
    
    </>
  )
}

export default App;
