/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link} from "react-router-dom";
import { logout } from "../Redux/action";
import logo from "../Assests/logo.png";
import image2 from "../Assests/image2.png";
import { clearData } from '../Modal/DataSlice';
import "./HomeScreen.css";


function HomeScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout =  () => {
    dispatch(clearData());
    dispatch(logout());
    navigate("/login");
  };

  const handleCheckData = () => {
    navigate("/datapage");
  };


  return (
    <div className="HomeScreen">
      <nav className="navbar">
        <img className="logo" src={logo} alt="Logo" />
        <ul className="nav-list">
          <li>
          <Link to="/loggedin">Home</Link>
          </li>
          <li>
            <a href="loggedin">Contact</a>
          </li>
          <li>
            <a href="loggedin">About</a>
          </li>
          <li>
            <button className="logout-button" onClick={handleLogout}>
              Log out
            </button>
          </li>
        </ul>
      </nav>
      <div className="background">
        <div className="color-overlay">
          <img className="overlay-image" src={image2} alt="Overlay Image" />
          <div className="blue-content">
            <h1 className="head">Welcome to the Data App</h1>
            <p className="subheading">
              Data App is a user-friendly application designed to facilitate
              easy access
              <br />
              and check employee and performance data related to the
              organization
            </p>
            <button className="green-button" onClick={handleCheckData}>
              Check Data Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
