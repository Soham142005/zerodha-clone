import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

// MUI Components and Icons
import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

// Local Imports
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

// --- Data Preparation (Executed once when the module loads) ---
const labels = watchlist.map((stock) => stock["name"]);

const data = {
  labels,
  datasets: [
    {
      label: "Price",
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

  // export const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  // datasets: [
  //   {
  //     label: "# of Votes",
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       "rgba(255, 99, 132, 0.2)",
  //       "rgba(54, 162, 235, 0.2)",
  //       "rgba(255, 206, 86, 0.2)",
  //       "rgba(75, 192, 192, 0.2)",
  //       "rgba(153, 102, 255, 0.2)",
  //       "rgba(255, 159, 64, 0.2)",
  //     ],
  //     borderColor: [
  //       "rgba(255, 99, 132, 1)",
  //       "rgba(54, 162, 235, 1)",
  //       "rgba(255, 206, 86, 1)",
  //       "rgba(75, 192, 192, 1)",
  //       "rgba(153, 102, 255, 1)",
  //       "rgba(255, 159, 64, 1)",
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
  // };


const WatchList = () => {
  // Note: The original code imported axios but didn't use it in this component (it uses local 'watchlist' data).
  // I am preserving the original component body structure.

  return (
    <div className="watchlist-container">
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: ninfy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      {/* Watch List Items */}
      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      {/* Doughnut Chart Visualization */}
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

// --- WatchListItem Component ---

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {/* Conditional rendering of arrow icon based on stock performance */}
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            // Note: The original code applied the class "down" to KeyboardArrowUp. Preserving this for CSS compatibility.
            <KeyboardArrowUp className="down" /> 
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {/* Renders action buttons on hover */}
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

// --- WatchListActions Component ---

const WatchListActions = ({ uid }) => {
  //const generalContext = useContext(GeneralContext);
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    // Calls a function from the GeneralContext to open the Buy/Order window
    openBuyWindow(uid);
  };

  const handleSellClick = () => {
  // You need a function in your Context to open the Sell window
  openSellWindow(uid); 
};

  return (
    <span className="actions">
      <span>
        {/* Buy Button */}
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>
        
        {/* Sell Button */}
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="sell" onClick={handleSellClick}>Sell</button>
        </Tooltip>
        
        {/* Analytics Button */}
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        
        {/* More Options Button */}
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};