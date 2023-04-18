import React, { useState, useEffect } from 'react';
import { createContext, useContext, useReducer } from "react"
import pine from '../fruits/1.jpeg'
import { cartReducer } from "./Reducers";

import Navbar from '../navbarshop';
import Home from '../home'

const Cart = createContext();

function Context({ children }) { // add children argument
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    console.log("fetch")
    fetch('http://127.0.0.1:8000/products/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  function SnacksFilterChange() {
    console.log("works")
    const filtered = products.filter(item => item.category === 'Snacks');
    setFilteredProducts(filtered);
  }

  function VegFilterChange() {
    console.log("works")
    const filtered = products.filter(item => item.category === 'Veg');
    setFilteredProducts(filtered);
  }

  function MeatsFilterChange() {
    console.log("works")
    const filtered = products.filter(item => item.category === 'Veg');
    setFilteredProducts(filtered);
  }

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children} {/* add children prop */}
    </Cart.Provider>
  )
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
}
