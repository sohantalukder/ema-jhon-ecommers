import React from "react";
import "./ReviewItem.css";
const ReviewItem = (props) => {
  const { price, name, quantity, key } = props.product;
  return (
    <div className="product-item">
      <div className="item">
        <h4 className="product-name">{name}</h4>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={() => props.handleRemove(key)} className="remove">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
