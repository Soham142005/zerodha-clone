import React ,{ useState, useEffect } from "react";
import axios from "axios";
// Assuming you have this file in src/data/data.js or similar
import { positions } from "../data/data"; 

const Positions = () => {
    const [allPositions, setALLPositions] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3002/allPositions").then((res) => {
        console.log(res.data);
        setALLPositions(res.data);
      });
    }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              // Calculations
              const curValue = stock.price * stock.qty;
              const profitLoss = curValue - stock.avg * stock.qty;

              // Class assignments for coloring the P&L and Change columns
              const isProfit = profitLoss >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              // Note: Assumes 'stock.isLoss' property determines the Day Change color
              const dayClass = stock.isLoss ? "loss" : "profit"; 

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  
                  {/* P&L Column */}
                  <td className={profClass}>
                    {profitLoss.toFixed(2)}
                  </td>
                  
                  {/* Change Column */}
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;