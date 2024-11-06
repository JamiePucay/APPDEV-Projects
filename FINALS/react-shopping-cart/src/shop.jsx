import { useState } from "react";
import Login from "./login";

export default function Shop(props) {
  const ShopItems = props.items;
  const [cart, setCart] = useState([]);

  function addItem(item) {
    setCart(c => [...c, item]);
  }

  const renderItems = () => {
    return ShopItems.map((item) => (
      <div key={item.id}>
        <li>{item.name}</li>
        <p>Price per piece: ${item.price}</p>
        <button onClick={() => addItem(item)}>Add to Cart</button>
      </div>
    ));
  };

  const renderCart = () => {
    return cart.map((item) => (
      <div key={item.id}>
        <li>{item.name}</li>
        <p>Price per piece: ${item.price}</p>
        <br />
      </div>
    ));
  };

  if (!props.isLoggedIn) {
    return <Login items={props.items} />;
  } else {
    return (
      <>
        <h4>This is the shop: </h4>
        <ul>{renderItems()}</ul>

        <h4>Cart Items: </h4>
        {cart.length > 0 ? (
          <ul>{renderCart()}</ul>
        ) : (
          <p>There are no items in the cart!</p>
        )}
      </>
    );
  }
}
