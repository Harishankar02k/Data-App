import React, { useState } from "react";
import image from "../Assests/image1.png";
import "./login.css";
import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSuccess } from "../Redux/action";
import { useDispatch } from "react-redux";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const validUsers = [
    { email: "Harishankar2me@gmail.com", password: "Harishankar" },
    { email: "Divyarajput@gmail.com", password: "Divya" },
    { email: "Deepak@gmail.com", password: "Deepak" },
  ];

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleRememberChange(event) {
    setRemember(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      setEmailError("Please enter your email.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Please enter your password.");
      return;
    }

    // Check if the entered credentials match any valid user
    const validUser = validUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (!validUser) {
      setEmailError("Invalid email or password. Please try again.");
      return;
    }

    if (remember) {
      localStorage.setItem("user", JSON.stringify(validUser));
    }
    dispatch(loginSuccess(validUser));

    navigate("/loggedin");
  }
  React.useEffect(() => {
    if (isLoggedIn) {
      navigate("/loggedin"); 
    }
  }, [isLoggedIn, navigate]);



  return (
    <div className="login-form">
      <h1 className="header">Hello!! Welcome Back</h1>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <div className="error-message">{passwordError}</div>}
      </div>
      <div className="check-box">
        <input
          type="checkbox"
          id="remember"
          name="remember"
          checked={remember}
          onChange={handleRememberChange}
        />

        <div className="keep-me" htmlFor="remember">
          Keep me logged in
        </div>

        <div className="forget">
          <a href="Password">Forgot password?</a>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" onClick={handleSubmit}>
          Log in
        </button>
      </div>
      <div className="horizontal-line">OR</div>
      <div className="form-group">
        <button type="button">Sign in with Google</button>
      </div>
      <div className="bottom"> Protecting your data is our top priority.</div>
    </div>
  );
}

function PersonImage() {
  return <img src={image} alt="A person walking towards a laptop" />;
}

function SplitScreen() {
  return (
    <div className="row">
      <div className="column">
        <PersonImage />
      </div>
      <div className="column">
        <LoginForm />
      </div>
    </div>
  );
}

export default SplitScreen;
