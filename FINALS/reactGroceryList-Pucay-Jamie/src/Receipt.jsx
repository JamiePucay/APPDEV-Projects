import React from 'react';

function Receipt({ cart, totalAmount, paidAmount, change }) {
  return (
    <div>
      <h2>Receipt</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity} - Php{item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: Php{totalAmount}</p>
      <p>Paid: Php{paidAmount}</p>
      <p>Change: Php{change}</p>
    </div>
  );
}

export default Receipt;

