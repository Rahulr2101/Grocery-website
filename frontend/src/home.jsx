// Home.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbarhome from './navbarshop'
import SingleProduct from './SingleProduct';
import './products.css'

const Home = ({ products }) => {
  // console.log(products)
  return (
    <>
     
      <div className="productsContainer">
        {products.map(product => (
            <SingleProduct prod={product} />

        ))}
      </div>
    </>
  );
}

export default Home;
