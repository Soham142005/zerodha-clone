import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Summary = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []); 
  const labels = allHoldings.map((stock) => stock["name"]);

  // Prepare data object for the VerticalGraph component (assuming it uses react-chartjs-2 structure)
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      {/* User Greeting Section */}
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      {/* Equity Funds Section */}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Holdings Summary Section */}
      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            {/* P&L Data */}
            <h3 className="profit">
              1.55k <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>
            </p>
            <p>
              Investment <span>29.88k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

     < VerticalGraph data={data} />
    </>
  );
};

export default Summary;