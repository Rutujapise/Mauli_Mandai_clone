import { Link } from "react-router-dom";

export default function SecondNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
      <div className="container-fluid">
        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#secondNavbar"
          aria-controls="secondNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="secondNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

             {/* Category Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="categoryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Select Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                <li>
                  <Link className="dropdown-item" to="/dairy">
                    Dairy Products
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/snacks">
                    Snacks
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/beverages">
                    Beverages
                  </Link>
                </li>
              </ul>
            </li>

            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            {/* Fresh Veggies */}
            <li className="nav-item">
              <Link className="nav-link" to="/fresh-veggies">
                Fresh Veggies
              </Link>
            </li>

            {/* Fresh Fruits */}
            <li className="nav-item">
              <Link className="nav-link" to="/fresh-fruits">
                Fresh Fruits
              </Link>
            </li>

           
          </ul>

          {/* Right side (optional extra link) */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
