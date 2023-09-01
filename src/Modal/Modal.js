
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "./DataSlice"; 
import "./Modal.css";

function Modal({ isOpen, onClose }) {
  const [additionalData, setAdditionalData] = useState("");
  const data = useSelector((state) => state.data); 
  const dispatch = useDispatch();

  if (!isOpen) {
    return null;
  }

  const handleInputChange = (event) => {
    setAdditionalData(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addData(additionalData)); 
    setAdditionalData("");
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="data-section">
          <div className="sepration">
            <h2 className="data">Local Stored Data</h2>
            <ul className="static-data">
              {data.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
          <div className="separator"></div>
          <div className="form-section">
          
            <h2 className="local">Insert Additional Data</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                value={additionalData}
                onChange={handleInputChange}
                placeholder="Enter additional data"
              />
              <button className="instert" type="submit">
                Insert
              </button>
            </form>
            <button className="close" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
