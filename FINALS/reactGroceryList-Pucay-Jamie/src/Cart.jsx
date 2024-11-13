import React from 'react';

function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <span>
              {item.name} x {item.quantity} - Php{item.price * item.quantity}
            </span>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
