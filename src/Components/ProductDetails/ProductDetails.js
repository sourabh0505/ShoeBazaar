import React from "react";
import "./productdetails.css";
import { useParams } from "react-router-dom";
import data from "../Home/productInfo.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const productItem = data.find((item) => item.id === parseInt(id));

  const dispatch = useDispatch();

  return (
    <div className="productdetails-container">
      <div className="product-image">
        <img src={productItem.image} alt={productItem.name} />
      </div>

      <div className="product-information">
        <div>
          <h4>Sustainable Materials</h4>
          <h1>{productItem.name}</h1>
          <h4>Men's Shoes</h4>
        </div>

        <div>
          <h3>MRP : $ {productItem.price}</h3>
          <h4>incl. of taxes</h4>
          <h4>(Also includes all applicable duties)</h4>
        </div>

        <div>
          <button onClick={() => dispatch(addToCart(productItem))}>
            Add to Cart
          </button>
        </div>

        <div>
          <p>This product is excluded from site promotions and discounts.</p>
        </div>

        <div>
          <h4>DESCRIPTION</h4>
          <p>{productItem.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
