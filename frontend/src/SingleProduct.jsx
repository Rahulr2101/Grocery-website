import {Button, Card} from "react-bootstrap";
import Rating from "./Rating";
import './card.css'
import { useDispatch } from "react-redux";
import {addToCart} from './redux/bazarSlice'
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";

const SingleProduct = ({prod}) => {
  const dispatch = useDispatch()
  let [baseQty,setBaseQty] = useState(1);
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} style={{ height: '300px' }} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}<span>₹ {prod.price.split(".")[0]}</span></Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <span>{prod.weight}</span><br/><br/>
              {prod.fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>4 days delivery</div>
              )}<br/>
              <Rating rating={prod.ratings} /><br/><br/>
            </div>
          </Card.Subtitle>
          <li style={{ display: 'flex' }}>
            <ul className="increa"><button onClick = {()=> setBaseQty(baseQty === 1 ? (baseQty = 1 ): baseQty - 1)}className="dec">-</button>
            {baseQty}
            <button onClick={()=>setBaseQty(baseQty + 1 )} className="inc">+</button></ul>
            <ul class="cartel"><button onClick={()=>dispatch(addToCart({
              _id: prod.id,
              img:prod.image, 
              title: prod.name,
              price:prod.price,
              quantity: baseQty,

            }))& toast.success(`${prod.name} is added `)} className="cartbut">cart</button></ul>
          </li>
        </Card.Body>
      </Card>
      <ToastContainer
        position="top-left"
        autoClose = {2000}
        hideProgressBar ={false}
        newestOnTop = {false}
        closeOnclick
        rtl={false}
        pauseOnFocusloss
        draggable
        theme="dark"
        
        />
    </div>
  );
}

export default SingleProduct;

