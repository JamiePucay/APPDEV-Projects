/*
-----------------------------------------------------------------------------
reactGroceryList
-----------------------------------------------------------------------------
App.jsx
import React, { useState } from 'react';
import ItemList from './ItemList';
import Cart from './Cart';
import Checkout from './Checkout';
import Receipt from './Receipt';

const products = [
  { id: 1, name: 'Grapes', price: 100 },
  { id: 2, name: 'Oranges', price: 50 },
  { id: 3, name: 'Kiwis', price: 40 },
  { id: 4, name: 'Bananas', price: 80 },
  { id: 5, name: 'Cucumbers', price: 30 }
];

function App() {
  const [cart, setCart] = useState([]);
  const [paidAmount, setPaidAmount] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);

  // Add product to cart or increase quantity if already added
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Increase quantity of product in cart
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity of product in cart
  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate total amount in cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    setShowReceipt(true);
  };

  const handlePayment = () => {
    setShowReceipt(true);
  };

  const totalAmount = calculateTotal();
  const change = paidAmount ? (parseFloat(paidAmount) - totalAmount).toFixed(2) : 0;

  return (
    <div className="App">
      {!showReceipt ? (
        <>
          <h1>Grocery Store</h1>
          <ItemList products={products} addToCart={addToCart} />
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
          <Checkout
            totalAmount={totalAmount}
            setPaidAmount={setPaidAmount}
            handleCheckout={handleCheckout}
            handlePayment={handlePayment}
          />
        </>
      ) : (
        <Receipt cart={cart} totalAmount={totalAmount} paidAmount={paidAmount} change={change} />
      )}
    </div>
  );
}
export default App;




Cart.jsx
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



Checkout.jsx
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


ItemList.jsx
import React from 'react';

function ItemList({ products, addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name} - Php{product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ItemList;



Receipt.jsx
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



*/