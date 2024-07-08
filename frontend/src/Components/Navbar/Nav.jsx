import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import HamburgerIcon from "../SVG/HamburgerIcon/HamburgerIcon";
import { RiMenu5Fill } from "react-icons/ri";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <div className="nav-container sticky-top">
        <div className="logo-container">
          <a href="">
            <img src="/logo.png" alt="logo" />
          </a>
        </div>

        <div className={`menu-container ${isNavOpen ? "open-nav" : ""}`}>
          <Link to="">Episodes</Link>
          <Link to="">About</Link>
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`button-container ${isNavOpen ? "open-nav" : ""}`}>
          <div className="order-lg-1 order-2">
            <a className="nav-sec-btn me-3">RECENT EPISODES</a>
          </div>
          <div className="order-lg-2 order-1">
            <a className="nav-primary-btn">SUBSCRIBE</a>
          </div>
        </div>
        <button onClick={handleToggle} className="hamburger-icon-container">
          {/* <HamburgerIcon /> */}
          <RiMenu5Fill size={25} color="#CD4631" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
