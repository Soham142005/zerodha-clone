import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  
  openBuyWindow: (uid) => {}, 
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {}, // New
  closeSellWindow: () => {}, // New
});

// --- 2. Create the Context Provider Component ---
export const GeneralContextProvider = (props) => {

  // State to control the visibility of the Buy Action Window (Modal)
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  // State to hold the unique ID of the stock that triggered the action
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // Function to open the window and set the stock ID
  const handleOpenBuyWindow = (uid) => {
    setIsSellWindowOpen(false);
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  // Function to close the window and reset the stock ID
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
     setSelectedStockUID("");
  };

  // --- NEW FUNCTIONS FOR SELL WINDOW ---
  const handleOpenSellWindow = (uid) => {
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      // The 'value' object provides the state-changing functions to all consuming components
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow, // Provide to children
        closeSellWindow: handleCloseSellWindow, // Provide to children
        isBuyWindowOpen,
        isSellWindowOpen, // Export state
        selectedStockUID,
      }}
    >
      {/* Renders all child components wrapped by this provider */}
      {props.children}
      
      {/* Conditionally render the BuyActionWindow component. 
        It is rendered outside of the {props.children} so it appears 
        as an overlay (like a modal) when 'isBuyWindowOpen' is true.
      */}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

// --- 3. Export the Context itself for easy importing by consumer components ---
export default GeneralContext;