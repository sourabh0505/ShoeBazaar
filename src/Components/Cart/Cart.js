import React, { useEffect } from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal, removeFromCart } from "./cartSlice";

function Cart() {
  const { cart, cartQuantity, cartAmount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className="cartPage">
      <div className="mappedProductsContainer">
        {cart &&
          cart.map((data) => (
            <div className="mappedProducts" key={data.id}>
              <img className="cartProductImage" src={data.image} alt="/" />
              <h3>{data.name}</h3>
              <h3>Price: ${data.price}</h3>
              <h3>Quantity: {data.quantity}</h3>
              <button
                className="removeBtn"
                onClick={() => dispatch(removeFromCart(data.id))}
              >
                Remove
              </button>
            </div>
          ))}
      </div>

      <div className="cartCheckoutDiv">
        <div className="cartProductCount">
          <div className="cartProductDataInfo">
            <h1>Summary</h1>
            <h3>Total Items</h3>
            <h3>Subtotal</h3>
            <h3>Estimated Delivery & Handling</h3>
          </div>

          <div className="cartProductData">
            <h1>-</h1>
            <h3>{cartQuantity}</h3>
            <h3>${cartAmount}</h3>
            <h3>Free</h3>
          </div>
        </div>

        <button className="checkoutBtn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
