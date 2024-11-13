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


