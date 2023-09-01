/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import logo from "../Assests/logo.png";
import { logout } from "../Redux/action";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DataA from "../Assests/Data A.png";
import DataB from "../Assests/Data B.png";
import DataC from "../Assests/Data C.png";
import "./Datapage.css";
import Modal from "../Modal/Modal";
import { clearData } from "../Modal/DataSlice";

function DataScreen() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearData());
    dispatch(logout());
    navigate("/login");
  };

  

  const handleImageClick = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="datascreen">
      <h1>
        User-friendly Data Ingestion Seamlessly bring your data into our
        platform
      </h1>
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
      <div className="image-container">
        <div className="image"  onClick={handleImageClick}>
          <img src={DataA} alt="Image 1" />
          <p>
            Employee performance details refer to specific information and data
            related to an employee's job performance.
          </p>
        </div>
        <div className="image"  onClick={handleImageClick}>
          <img src={DataB} alt="Image 2" />
          <p>
            Employee data refers to the collection of information and details
            related to individuals employed by a company
          </p>
        </div>
        <div className="image" onClick={handleImageClick}>
          <img src={DataC} alt="Image 3" />
          <p>
            An employee record is a comprehensive and organized collection of
            information and data pertaining to a company
          </p>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default DataScreen;
