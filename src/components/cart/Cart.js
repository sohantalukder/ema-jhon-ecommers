import React from "react";

import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <div className="title">
        <h2>Order Summery</h2>
        <h4>Items Ordered: {totalQuantity}</h4>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Shipping:</td>
            <td>{shipping}</td>
          </tr>
          <tr>
            <td>Total: </td>
            <td>{total.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Tax:</td>
            <td>{tax.toFixed(2)}</td>
          </tr>
          <tr className="totalQuantity">
            <td>Grand Total: </td>
            <td>{grandTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      {props.children}
    </div>
  );
};

export default Cart;
