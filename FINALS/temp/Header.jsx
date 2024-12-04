/*
Header.jsx
export default function Header() {
    return(
      <header>
        <h1>My Website</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <hr />
      </header>  
    );
}


Footer.jsx
export default function Footer() {

    return (
        <footer>
            <hr />
            <p>&copy; {new Date().getFullYear()} My Website|| Written by: Jamie Pucay</p>
        </footer>
    )
}


main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)



-----------------------------------------------------------------------------
react-shopping-cart
-----------------------------------------------------------------------------
App.jsx
import { useState } from 'react';
import Shop from './shop';
import Login from './login';

function App() {
  const items = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 15 },
    { id: 3, name: "Item 3", price: 20 }
  ];
  return (
    <div>
      <Login items={items} />
    </div>
  );
}
export default App;





adminpanel.jsx
import { useState } from "react";
export default function AdminPanel(props) {
    const [devlogs, setDevlogs] = useState([]);  // Initialize devlogs as an empty array
    function addDevlog() {
        let devlog = {
            date: new Date().getFullYear() + "-" +
            (new Date().getMonth() + 1) + "-" +
            new Date().getDate(),
            title: document.getElementById("title").value,
            content: document.getElementById("content").value
        };
    setDevlogs(d => [...d, devlog]);
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    }
    const renderAccounts = () => {
        return props.accounts.map((account) => (
            <div key={account.id}>
                <h2>{account.username}</h2>
                <p>{account.role}</p>
            </div>
        ));
    };
    const renderDevLogHistory = () => {
        return devlogs.map((devlog, index) => (
            <div key={index}>
                <h2>{devlog.title}</h2>
                <p>{devlog.date}</p>
                <p>{devlog.content}</p>
            </div>
        ));
  };
    if (!props.isLoggedIn) {
        return <p>Please log in to access the admin panel.</p>;
    } else {
        return (
            <div>
                <h1>This is the Admin Panel</h1>
                <p>These are the active accounts:</p>
                {renderAccounts()}
                <br />
                <hr />
                <h4>Admin Devlogs</h4>
                Title <input type="text" name="title" id="title" />
                <br />
                <br />
                Content:
                <br />
                <textarea name="content" id="content" cols="50" rows="10"></textarea>
                <br />
                <button type="submit" onClick={addDevlog}>Submit</button>
                <h4>Devlog History</h4>
                {renderDevLogHistory()}
            </div>
        );
    }
}
export default adminpanel;


login.jsx
import { useState } from "react";
import Shop from "./shop";
import AdminPanel from "./adminpanel"; // Correct import

export default function Login(props) {
  const accounts = [
    { id: 1, username: "customer", password: "customer", role: "customer" },
    { id: 2, username: "admin", password: "admin", role: "admin" },
    { id: 3, username: "guest", password: "guest", role: "guest" },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [enteredUsernames, setEnteredUsernames] = useState("");
  const [enteredPasswords, setEnteredPasswords] = useState("");

  function getUsername(event) {
    setEnteredUsernames(event.target.value);
  }

  function getPassword(event) {
    setEnteredPasswords(event.target.value);
  }

  function handleLogin() {
    const account = accounts.find(
      (account) =>
        account.username === enteredUsernames && account.password === enteredPasswords
    );
    
    if (account) {
      setIsLoggedIn(true);
      setRole(account.role);
    } else {
      alert("Invalid username or password");
    }
  }

  const renderLogin = () => {
    return (
      <div>
        <h1>Login</h1>
        Username: <input
          type="text"
          placeholder="Username"
          onChange={getUsername}
        />
        Password: <input
          type="password"
          placeholder="Password"
          onChange={getPassword}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };

  if (!isLoggedIn) {
    return renderLogin();
  } else {
    if (role === "customer") {
      return <Shop isLoggedIn={isLoggedIn} items={props.items} />;
    } else if (role === "admin") {
      return <AdminPanel isLoggedIn={isLoggedIn} accounts={accounts} />;
    } else {
      return <p>Access Denied</p>;
    }
  }
}



shop.jsx
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



*/