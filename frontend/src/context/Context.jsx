import { createContext, useContext, useReducer } from "react"
import pine from '../fruits/1.jpeg'
import { cartReducer } from "./Reducers";

const Cart = createContext();


const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
            id: 1,
            name: "pineapple" ,
            price: "50" ,
            image: pine,
            instock: 7 ,
            fastDelivery: true ,
            ratings: 3,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
    return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
}

export default Context;


export const CartState =  () => {
    return useContext(Cart);
}