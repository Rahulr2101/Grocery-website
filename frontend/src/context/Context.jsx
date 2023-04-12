// ProductList.js
import React, { useState, useEffect } from 'react';
import Home from '../home'

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/products/')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
   <Home products={products}></Home>
  );
}

export default ProductList;



