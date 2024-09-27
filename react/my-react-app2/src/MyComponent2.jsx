import React, { useState } from "react";
// onChange event handler triggers a function everytime the value of the input changes
//it is primarily used with form elements like input, textarea, radio ecc

function MyComponent2() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  //function gives me back the value of the name when it is called
  //input text
  function handleNameChange(event) {
    setName(event.target.value);
  }

  //input numeric
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  //textarea
  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  //select and dropdown
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  //radio buttons
  function handleShipping(event) {
    setShipping(event.target.value);
  }

  return (
    <>
      <div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>

        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="enter delivery instructions"
        />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Paypal">Paypal</option>
          <option value="Mastercard">Mastercard</option>
        </select>
        <p>Payment Chosen: {payment}</p>

        <label>
          <input
            type="radio"
            value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={handleShipping}
          />
          PicK Up
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShipping}
          />
          Delivery
        </label>
        <p>Shipping chosen: {shipping}</p>
      </div>
    </>
  );
}

export default MyComponent2;
