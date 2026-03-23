import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; // Link is used for button styling/behavior
import axios from "axios";
import GeneralContext from "./GeneralContext"; // Import the context object

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  // Use the useContext hook to get the functions provided by the GeneralContextProvider
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // --- Handlers ---
  
  const handleBuyClick = () => {
    // 1. Post the new order to the backend
    axios.post("http://localhost:3002/newOrder", {
      name: uid, // Stock identifier
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    })
    .then(response => {
      // Optional: Handle success response here
      console.log("Order placed:", response.data);
    })
    .catch(error => {
      // Optional: Handle error here
      console.error("Order failed:", error);
    });

    // 2. Close the window using the context function
    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    // Close the window using the context function
    generalContext.closeBuyWindow();
  };

  // --- Render ---
  return (
    // The container is marked as draggable
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          {/* Quantity Input */}
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          
          {/* Price Input */}
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          {/* Buy Button */}
          {/* Link is used for styling, but click handler performs the action */}
          <Link to="#" className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          
          {/* Cancel Button */}
          <Link to="#" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;