import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./Cartitem";
import { ToastContainer,toast } from "react-bootstrap";

const Cart = () => {
    const productData = useSelector((state)=> state.bazar.productData);
    const[totalAmt,setTotalAmt] = useState("");
    useEffect(()=>{
        let price = 0;
        productData.map((item)=>{
            price += item.price * item.quantity
            return price 
        })
        setTotalAmt(price.toFixed(2))
       
    },[productData])
    console.log(productData);
    return (<div>
                <img className="w-full h-60 object-cover" src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cartImg"/>

    <div className="max-w-screen-x1 mx-auto py-20 flex">
        
        <CartItem/>
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                <h2 className="text-2x1 font-medium">cart totals</h2>
                <p className="flex items-center gap-4 text-base">
                    Subtotal{" "}
                    <span className="font-titleFont font-bold text-lg">
₹{totalAmt}
                        
                    </span>
                    </p>
                    <p className="flex items-start gap-4 text-base">
                        Shipping{""}
                        <span>street road 14, New york</span>
                    </p>

            </div>
            <p className="font-titlefont font-semibold flex justify-between mt-6">
                Total<span className="text-x1 font-bold"> 
₹{totalAmt}</span>
            </p>
            <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">proceed to checkout</button>
        </div>
    </div>
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
    </div>)

};

export default Cart