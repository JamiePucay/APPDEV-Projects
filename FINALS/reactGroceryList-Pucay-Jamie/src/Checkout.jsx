import React from 'react';

function Checkout({ totalAmount, setPaidAmount, handleCheckout, handlePayment }) {
  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: Php{totalAmount}</p>
      <input
        type="number"
        placeholder="Enter amount paid"
        onChange={(e) => setPaidAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
}

export default Checkout;
