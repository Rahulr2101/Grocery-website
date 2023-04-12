import {Card} from "react-bootstrap";
import Rating from "./Rating";


import './card.css'

const SingleProduct = ({prod}) => {
  
    return ( <div className="products">
    <Card>
    <Card.Img variant="top" src={prod.image} style={{ height: '300px' }} alt={prod.name} />
      <Card.Body>
        <Card.Title>{prod.name}<span>₹ {prod.price.split(".")[0]}</span></Card.Title>
        <Card.Subtitle style={{ paddingBottom: 10 }}>
        <span>{prod.weight}</span><br/><br/>
          {prod.fastDelivery ? (
            <div>Fast Delivery</div>
          ) : (
            <div>4 days delivery</div>
          )}<br/>
          <Rating rating={prod.ratings} /><br/><br/>
        </Card.Subtitle>
        <div><button className="dec">-</button> count <button className="inc">+</button></div>
        </Card.Body>
        </Card>
    </div>
    )
}

export default SingleProduct;

