import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

import {holdings}  from "../data/data"

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []); 

  // --- Chart Data Preparation ---
  // Create labels for the chart using stock names
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

  // --- Component Render ---
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {/* Holdings Table */}
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              // Calculations
              const curValue = stock.price * stock.qty;
              const profitLoss = curValue - stock.avg * stock.qty;
              
              // Class assignments based on profit/loss status
              const isProfit = profitLoss >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              // Note: Assumes 'stock.isLoss' property determines the Day Change color
              const dayClass = stock.isLoss ? "loss" : "profit"; 

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  
                  {/* P&L Column */}
                  <td className={profClass}>
                    {profitLoss.toFixed(2)}
                  </td>
                  
                  {/* Net Change Column */}
                  <td className={profClass}>{stock.net}</td>
                  
                  {/* Day Change Column */}
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Portfolio Summary Section */}
      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      
      {/* Vertical Graph */}
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;