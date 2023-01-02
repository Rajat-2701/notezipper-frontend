import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const handleShow = () => setShow(!show);

  const auth = localStorage.getItem("user");
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            CodeBucks
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" className="nav-links" onClick={click ? handleClick : null}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/mynotes"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                My Notes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/register"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
            {auth && (
              <li className="nav-item dropdown-nav-item" onClick={handleShow}>
                My Profile
                {show ? (
                  <ul className="nav-menu dropdown-menu">
                    <li
                      className="nav-item profile-menu"
                      style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "100%" }}
                    >
                      <i className="fas fa-user profile-icons" style={{ color: "#a2a9b4" }} />
                      <NavLink
                        to="/my-profile"
                        className="nav-links"
                        style={{ color: "#a2a9b4", marginTop: "0", paddingLeft: "0" }}
                      >
                        My Profile
                      </NavLink>
                    </li>
                    <li
                      className="nav-item profile-menu"
                      style={{ display: "flex", alignItems: "center", width: "100%" }}
                    >
                      <i
                        className="fas fa-key profile-icons"
                        style={{ color: "#a2a9b4", marginLeft: 27, marginRight: 27 }}
                      />
                      <NavLink
                        to="/my-profile/change-password"
                        className="nav-links"
                        style={{ color: "#a2a9b4", marginTop: "0", paddingLeft: "0" }}
                      >
                        Change Password
                      </NavLink>
                    </li>
                    <li
                      className="nav-item profile-menu"
                      style={{ display: "flex", alignItems: "center", width: "100%" }}
                    >
                      <i
                        className="fas fa-power-off profile-icons"
                        style={{ color: "#a2a9b4", marginLeft: 27, marginRight: 27 }}
                      />
                      <NavLink
                        to="/logout"
                        className="nav-links"
                        style={{ color: "#a2a9b4", marginTop: "0", paddingLeft: "0" }}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                ) : null}
              </li>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
