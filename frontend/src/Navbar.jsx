import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg nav bg-white ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="media/logo.svg"
              alt="Zerodha"
              style={{ width: "25%" }}
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="signup" style={{ padding: "20px" }}>
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  " to="/about" style={{ padding: "20px" }}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  " to="/products" style={{padding: "20px" }}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/pricing" style={{ padding: "20px" }}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/support" style={{ padding: "20px" }}>
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="#" style={{ padding: "20px" }}>
                  <i className="fa-solid fa-bars"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
