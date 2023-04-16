import React, { useState, useEffect } from 'react';
import Home from '../home';
import Navbar from '../navbarshop';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/products/')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); 
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

  return (
    <div>
      <Navbar handleFilterSnacks={SnacksFilterChange} handleFilterVeg = {VegFilterChange} />

      <Home products={filteredProducts} />
    </div>
  );
}

export default ProductList;
