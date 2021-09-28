import { useContext } from "react";
import StoreContext from "../context/storeContext";
import "./cart.css";
import ItemOnCart from "./itemOnCart";

const Cart = () => {
  const cart = useContext(StoreContext).cart;

  const getTotal = () => {
        let total =0;
        for(let i =0; i< cart.length; i++){
            let prod = cart[i];
            total += (prod.price * prod.quantity);
        }
        return total.toFixed(2)
  };


  if (!cart.length) {
  }

  return (
    <div className="cart-page">
      <h1>Ready to Order?</h1>
      <h5>There are {cart.length} items in your cart</h5>
      <hr/>

      <div className="row">
      <div className="col-10 cart-container">
          {cart.map((prod) => (
          <ItemOnCart key={prod._id} data={prod}></ItemOnCart>
        ))}
      </div>

      <div className="total-container">
        <h4>Your Order Total</h4>
        <h3>$ {getTotal()}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
