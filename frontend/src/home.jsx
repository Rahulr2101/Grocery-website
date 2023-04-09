import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbarhome from './navbarshop'
import { CartState } from './context/Context';
import SingleProduct from './SingleProduct';
import './products.css'

const Home = () => {
  const { state: { products } } = CartState();

  return (
    <>
      <Navbarhome />
      <div className="productsContainer">
        {products.map((prod) => {
         return <SingleProduct prod ={prod} key ={prod.id}/>;
})}
      </div>
    </>
  );
}

export default Home;
