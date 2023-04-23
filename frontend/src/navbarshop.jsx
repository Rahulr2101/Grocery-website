import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Frame from "./assests/Frame.png";
import Carrot from "./assests/carrot.png";
import Milk from "./assests/milk.png";
import Meat from "./assests/meat.png";
import Snacks from "./assests/Snacks.png";
import Search from "./assests/search.png";
import Cart2 from "./assests/cart2.png";
import "./App";

import "./navbarshop.css";
import { Button, ToastContainer } from "react-bootstrap";
import { Link, Router } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar(props) {
  const productData = useSelector((state)=>state.bazar.productData);
  console.log(productData)
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={Frame}
            alt=""
            width="54"
            height="48"
            className="d-inline-block align-text-top"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav ms-auto justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <Link to="/Veg">
                <a className="nav" aria-current="page" href="#">
                  <img
                    src={Carrot}
                    alt="carrot"
                    width="19"
                    height="20"
                    className="Carrot"
                  ></img>
                  Fruits & Veg
                </a>
              </Link>
            </li>
            <li className="nav-item"><Link to = '/Meat'>
              <a className="nav" href="#">
                <img
                  src={Meat}
                  alts="meats"
                  width="28"
                  height="23"
                  className="Meats"
                ></img>
                Meat
              </a></Link>
            </li>
            <li className="nav-item"><Link to = '/Dairy'>
              <a className="nav" href="#">
                <img
                  src={Milk}
                  alts="Dairy"
                  width="15"
                  height="20"
                  className="Diary"
                ></img>
                Dairy
              </a></Link>
            </li>
            <li className="nav-item"><Link to = '/Snacks'>
              <a className="nav" href="#">
                <img
                  src={Snacks}
                  alts="Snacks"
                  width=""
                  height=""
                  className="Snacks"
                ></img>
                Snacks
              </a></Link>
            </li>
            <li>
              <a className="nav">
                <img src={Search} alt="Search"></img>
              </a>
            </li>
            <li>
              <a className="nav">
                <img src={Cart2} alt="Cart"></img>{productData.length}
              </a>
            </li>
          </ul>
        </div>
       
      </div>
    </nav>
  );
}

export default Navbar;
