import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://mandai.in/assets/common/images/logo.jpg"
            alt="Logo"
            width="100"
            height="80"
            className="me-2"
          />
        </Link>

        {/* City dropdown + search */}
        <form className="d-flex flex-grow-1 mx-3">
          <select className="form-select w-auto me-2">
            <option>Pune</option>
          </select>
          <input
            className="form-control"
            type="search"
            placeholder="Search products.."
          />
        </form>

        {/* Right Section */}
        <div className="d-flex align-items-center">
          <span className="me-3">📞 +91 7030 73 73 73</span>
          <Link className="nav-link me-3" to="/offers">
            Offers
          </Link>
          <Link className="nav-link me-3" to="/help">
            Help
          </Link>
          <div className="dropdown">
            <button
              className="btn btn-outline-success dropdown-toggle"
              type="button"
              id="loginDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Login Section
            </button>
            <ul className="dropdown-menu" aria-labelledby="loginDropdown">
              <li>
                <Link className="dropdown-item" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/offers">
                  Offers
                </Link>
                <Link className="dropdown-item" to="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
