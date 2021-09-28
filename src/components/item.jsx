import React, { useContext, useState } from "react";
import QuantityPicker from "./quantityPicker";
import "./item.css";
import storeContext from "../context/storeContext";

const Item = (props) => {
  const [quantity, setQuantity] = useState(1);
const addProductToCart = useContext(storeContext).addProductToCart;

  const handleAdd = () => {
    console.log("Adding to cart");
    let prodForCart = {
      ...props.data, quantity,
    };

    addProductToCart(prodForCart);
  };

  const handleQuantityChange = (val) => {
    console.log("quantity change", val);
    setQuantity(val);
  };

  const getControls = () => {
    return (
      <div className="item-controls">
        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>

        <button onClick={handleAdd} className="btn btn-sm btn-dark">
          Add to cart
        </button>
      </div>
    );
  };

  const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  };

  return (
    <div className="item">
      <img src={"/images/" + props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>
      {/* puts the titles on */}

      <label className="total">$ {getTotal()}</label>
      <label className="price">$ {props.data.price.toFixed(2)}</label>

      {getControls()}
    </div>
  );
};

export default Item;

