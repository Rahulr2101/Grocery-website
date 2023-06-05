import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import "./card.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/bazarSlice";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SingleProduct = ({ prod }) => {
  const dispatch = useDispatch();
  let [baseQty, setBaseQty] = useState(1);
  return (
    <div className="products">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={prod.image}
          alt="productImg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <h2 className="font-titlefont text-base font-bold">{prod.name}</h2>
          <div className="flex gap-2 relative">
            <div className="text-sm relative w-20 flex gap-2 text-right">
              <p className="font-semibold">₹{prod.price}</p>
            </div>
          </div>
        </div>
        <div>
          <p>{prod.weight}</p>
        </div>
        <br />
        <div>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <span
              onClick={() =>
                setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
              }
              className="border h-8  text-lg flex items-center justify-center px-3 bg-[#fc5362] hover:bg-gray-700 font-bold hover:text-white cursor-pointer duration-300 activate:bg-black"
            >
              -
            </span>
            {baseQty}
            <span
              onClick={() => setBaseQty(baseQty + 1)}
              className="border h-8  text-lg flex items-center justify-center px-3 bg-[#fc5362] font-bold hover:bg-gray-700 hover:text-white cursor-pointer furation-300 activate:bg-black"
            >
              +
            </span>
            <div className="flex float-right justify-end items-center ">
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: prod.id,
                      title: prod.name,
                      price: prod.price,
                      image:prod.image,
                      quantity: baseQty,
                    })
                  ) & toast.success(`${prod.name} is added `)
                }
                className="bg-blue-300 w-20 h-10 rounded-lg"
              >
                cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnclick
        rtl={false}
        pauseOnFocusloss
        draggable
        theme="dark"
      />
    </div>
  );
};

export default SingleProduct;
