import React, { useState , useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("USERID");

  // This part checks if the user has a "Ticket" (Token)
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user"); // Get the name we saved in Login.jsx

    if (!token) {
      navigate("/login");
    } else if (savedUser) {
      setUsername(savedUser); // Update the state with the real name
    }
  }, []);

  // This function clears the ticket when you click logout
 const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Clean up everything
    navigate("/login");
  };

  
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick= () =>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      {/* Logo */}
      <img src="/media/logo.png" style={{ width: "50px" }} alt="Logo" />
      
      <div className="menus">
        <ul>
          {/* Dashboard Menu Item (Index 0) */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          
          {/* Orders Menu Item (Index 1) */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          
          {/* Holdings Menu Item (Index 2) */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          
          {/* Positions Menu Item (Index 3) */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          
          {/* Funds Menu Item (Index 4) */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          
          {/* Apps Menu Item (Index 6 - skips 5) */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        
        <hr />
        
        {/* Profile Section */}
        <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
          <div className="avatar">
            {username.charAt(0).toUpperCase()} {/* Shows first letter of name */}
          </div>
          <p className="username">{username}</p> {/* Shows real name */}
          
          {isProfileDropdownOpen && (
            <div style={{ 
              position: "absolute", 
              background: "white", 
              padding: "10px", 
              border: "1px solid #ccc",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              borderRadius: "4px",
              marginTop: "10px"
            }}>
              <button onClick={handleLogout} style={{ color: "red", border: "none", background: "none", cursor: "pointer", fontWeight: "bold" }}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;