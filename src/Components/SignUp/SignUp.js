import React, { useState } from "react";
import "./signup.css";
import users from "../SignUp/users";
import {Link} from 'react-router-dom';

function SignUp({ onSignup, onSignin }) {
  const [action, setAction] = useState("SignIn");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpIn = () => {
    if (action === "SignUp") {
      handleSignUp();
    } else {
      handleSignIn();
    }
  };

  const handleSignIn = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      onSignin(user);
    } else {
      alert("The username and password are invalid!");
    }
  };

  const handleSignUp = () => {
    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
    console.log(users);
    if (typeof onSignup === "function") {
      onSignup(newUser);
    }
  };

  const clearFields = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="SignUp">
      <div className="page-info">
        <h1>{action}</h1>
        <h3>New user? {action} Here!</h3>
      </div>

      <div className="user-info">
        <h2>Name</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <h2>Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="signup-signin-container">
        <div className="submit">
          <button
            className={`submit-btn ${action === "SignUp" ? "gray" : ""}`}
            onClick={() => {
              setAction("SignUp"); clearFields();
            }}
          >
            SignUp
          </button>
        </div>

        <button
          className="submitBtn"
          onClick={() => {
            handleSignUpIn();
            clearFields();
          }}
        >
          <Link to='/home'>Dummy SignIn</Link>
        </button>

        <div className="submit">
          <button
            className={`submit-btn ${action === "SignIn" ? "gray" : ""}`}
            onClick={() => {
              setAction("SignIn"); clearFields();
            }}
          >
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
