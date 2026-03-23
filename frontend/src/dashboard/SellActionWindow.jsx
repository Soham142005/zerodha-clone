import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

 import "./SellActionWindow.css"; // We will create this next

const SellActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = () => {
    axios.post("http://localhost:3002/sellOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    })
    .then((response) => {
      alert(response.data.message);
      // CHANGE THIS:
      generalContext.closeSellWindow(); 
    })
    .catch((error) => {
      alert(error.response?.data?.message || "Error processing sell order");
    });
  };

  const handleCancelClick = () => {
    // CHANGE THIS:
    generalContext.closeSellWindow(); 
  };

  return (
    <div className="container sell-container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin available ₹5,000.00</span>
        <div>
          <Link to="#" className="btn btn-orange" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="#" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;