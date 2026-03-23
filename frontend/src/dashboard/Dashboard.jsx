import React from "react";
import { Route, Routes } from "react-router-dom";

// Import your component views
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

// Import your context provider
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* The GeneralContextProvider wraps WatchList, 
        making the context available to it.
      */}
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      
      {/* Main content area where routed components will be rendered */}
      <div className="content">
        <Routes>
          {/* Default Route: Renders Summary component at the root path "/" */}
          <Route exact path="/" element={<Summary />} />
          
          {/* Orders Route */}
          <Route path="/orders" element={<Orders />} />
          
          {/* Holdings Route */}
          <Route path="/holdings" element={<Holdings />} />
          
          {/* Positions Route */}
          <Route path="/positions" element={<Positions />} />
          
          {/* Funds Route */}
          <Route path="/funds" element={<Funds />} />
          
          {/* Apps Route */}
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;