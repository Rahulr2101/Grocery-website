import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Frame from './assests/Frame.png'
import Carrot from './assests/carrot.png'
import Milk from './assests/milk.png'
import Meat from './assests/meat.png'
import Snacks from './assests/Snacks.png'
import Search from './assests/search.png'
import Cart2 from './assests/cart2.png'

import './navbarshop.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={Frame} alt="" width="54" height="48" class="d-inline-block align-text-top"></img>
     </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-nav ms-auto justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li>
          <a class="nav" aria-current="page" href="#"><img src={Carrot} alt="carrot" width="19" height="20" class="Carrot"></img>Fruits & Veg</a>
        </li>
        <li class="nav-item">
          <a class="nav" href="#"><img src = {Meat} alts="meats" width="28" height = "23" class="Meats"></img>Meals</a>
        </li>
        <li class="nav-item">
          <a class="nav" href="#"><img src = {Milk} alts = "Dairy" width = "15" height ="20" class ="Diary"></img>Dairy</a>
        </li>
        <li class="nav-item">
          <a class="nav" href="#"><img src = {Snacks} alts = "Snacks" width="" height="" class="Snacks"></img>Snacks</a>
        </li>
        <li>
        <a className='nav'><img src={Search} alt="Search" ></img></a></li><li>
            <a className='nav'><img src={Cart2} alt = "Cart"></img></a>
        </li>
      </ul>
    </div>
    </div>
  
    </nav>
  );
}

export default Navbar;