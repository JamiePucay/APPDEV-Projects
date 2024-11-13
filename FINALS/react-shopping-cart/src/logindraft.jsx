<<<<<<< HEAD
/*import { useState } from "react";
import Shop from "./shop";
import adminPanel from "./adminpanel";

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

  const renderShop = () => {
    return <Shop isLoggedIn={isLoggedIn} items={props.items} />;
  };

  if (!isLoggedIn) {
    return renderLogin();
  } else {
    if (role === "customer") {
      return renderShop();
    } else {
      return <p>This is the admin panel!</p>;
    }
  }
  const renderAdmin = () => {
    return(
        <adminPanel isLoggedIn
    )
  }
}

*/

=======
/*import { useState } from "react";
import Shop from "./shop";
import adminPanel from "./adminpanel";

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

  const renderShop = () => {
    return <Shop isLoggedIn={isLoggedIn} items={props.items} />;
  };

  if (!isLoggedIn) {
    return renderLogin();
  } else {
    if (role === "customer") {
      return renderShop();
    } else {
      return <p>This is the admin panel!</p>;
    }
  }
  const renderAdmin = () => {
    return(
        <adminPanel isLoggedIn
    )
  }
}

*/

>>>>>>> 5d0e1034a9ec9a023f9ea8375d84e1bd5e95f81b
