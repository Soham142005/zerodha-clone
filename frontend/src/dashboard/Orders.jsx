import { Link } from "react-router-dom";
import React ,{ useState, useEffect } from "react";
import axios from "axios";
const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3002/allOrders").then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      });
    }, []);

  return (
     <>
   
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>price</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((stock, index)=> {
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{stock.mode}</td>
                  
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>   
    </>   

  );
};

export default Orders;