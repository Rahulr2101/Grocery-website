import { createContext, useContext, useReducer } from "react"
import pine from '../fruits/2.jpeg'
import { cartReducer } from "./Reducers";

const Cart = createContext();


const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
            id: 1,
            name: "Pineapple" ,
            price: "50" ,
            weight: "1 pc (Approx 1 - 1.5kg)",
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