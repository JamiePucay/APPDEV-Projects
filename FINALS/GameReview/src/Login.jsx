import { useState } from "react";
import Reviews from "./Reviews";

export default function Login() {
  const accounts = [
    { username: "admin", password: "admin" }
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enteredUsernames, setEnteredUsernames] = useState("");
  const [enteredPasswords, setEnteredPasswords] = useState("");

  function handleUserNameChange(event) { //update the username input state
    setEnteredUsernames(event.target.value);
  }

  function handlePasswordChange(event) { //update the password input state
    setEnteredPasswords(event.target.value);
  }

  function handleLogin() { //checks username/password against stored account
    const account = accounts.find(
      (account) =>
        account.username === enteredUsernames && account.password === enteredPasswords
    );

    if (account) {
      setIsLoggedIn(true); //If inputs are correct, set isLoggedIn to true
    } else {
      alert("Invalid username or password");
    }
  }

  const renderLoginForm = () => { // Renders the login form if user is not logged in
    return (
      <div className="login-container">
        <h1>Welcome to Wormmmy's Reviews!</h1>
        <h4>Login to Continue:</h4>
        Username: 
        <input type="text" name="username" id="username" onChange={handleUserNameChange} />
        <br />
        Password:
        <input type="password" name="password" id="password" onChange={handlePasswordChange} />
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
      </div>
    );
  };

  if (!isLoggedIn) { // If not logged in, render the login form
    return renderLoginForm();
  } else {
    return <Reviews isLoggedIn={isLoggedIn} />; // Show Reviews component after login
  }
}
