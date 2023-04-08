import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Frame from './assests/Frame.png'
import cart from './assests/cart.png'

import './Navbar.css'

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
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Categories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <a className='nav'><img src={cart} alt="Frame" ></img></a>
        <a className='nav'><button class='sign_in'><a className="sign">Sign in</a></button></a>
      </ul>
    </div>
    </div>
  
    </nav>
  );
}

export default Navbar;