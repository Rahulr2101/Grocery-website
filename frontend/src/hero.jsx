import React from 'react';
import './App.css';
import './hero.css';
import hero_img from './assests/hero_img.png';
import Happycu from './assests/Happy.png'
import play from './assests/play.png'
import Navbar from './Navbar'

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Hero = () =>{
  return(
    <>
    <Navbar/>
    <div className='sen'><span className='Bring'>Bring the store</span><br></br>
    <span   className='to'>to your</span>
    <span className='Door'>Door</span>
    <Link to = '/home '><button className='Shop'>Shop now</button></Link></div>
    <div className='heroimg'>
        <img src= {hero_img} className='hero1'></img>
    </div>
    <div>  <img src={Happycu} className='Happyimg' alt='Rating' /></div>
    <div>  <img src={play} className='play' alt='Play Button' /></div>
    </>
  )
}

export default Hero;