import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbarhome from "./navbarshop";
import SingleProduct from "./SingleProduct";
import "./products.css";

const Veg = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const filtered = products.filter((item) => item.category === "Veg");
    setFilteredProducts(filtered);
  }, [products]);
  console.log(filteredProducts);
  return (
    <>
    <Navbarhome/>
      <div className="productsContainer">
        {filteredProducts.map((product) => (
          <SingleProduct key={product.id} prod={product} />
        ))}
      </div>
    </>
  );
};

export default Veg;
