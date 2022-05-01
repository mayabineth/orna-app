import React from "react";
import { Link } from "react-router-dom";
import orna from "../orna2.jpg";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <Link to="/">
            <img src={orna} alt="orna logo" className="logo" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/contact">צור קשר</Link>
            </li>
            <li>
              <Link to="/treat">טיפולים </Link>
            </li>
            <li>
              <Link to="/mind">מיינדפולנס</Link>
            </li>
            <li>
              <Link to="/about">אודות</Link>
            </li>
            <li>
              <Link to="/">בית</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
