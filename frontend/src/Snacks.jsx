
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SingleProduct from './SingleProduct';
import './products.css'

const Snacks = ({ products }) => {
  console.log(products)
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

export default Snacks;
