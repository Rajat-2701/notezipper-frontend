import React, { useEffect, useRef, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useModalContext } from "../../context/ModalContext";
import "./Header.css";
const Header = () => {
  const {
    isLoginModal,
    isRegisterModal,
    ToogleLoginModal,
    ToogleRegisterModal,
  } = useModalContext();
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState("");
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const handleShow = () => setShow(!show);

  // getting user info from local-storage:
  // logging out user by removing from local storage:
  const handleLogOut = () => {
    logout();
  };
  const handleUser = (e) => {
    e.preventDefault();
    if (user?.data[0]?.role !== "admin") {
      toast.error("Only admin can access this page", {
        position: "top-right",
        theme: "dark",
      });
      return;
    } else {
      Navigate("/mynotes");
    }
  };
  const { user, logout } = useAuth();

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
              <NavLink to="/" className="nav-links">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={user?.data[0]?.role === "admin" ? "/mynotes" : null}
                className="nav-links"
                onClick={() => handleUser()}
              >
                Create Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-links">
                Contact Us
              </NavLink>
            </li>
            {user ? (
              <li className="nav-item dropdown-nav-item" onClick={handleShow}>
                My Profile
                {show ? (
                  <ul className="nav-menu dropdown-menu">
                    <li
                      className="nav-item profile-menu"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      <i
                        className="fas fa-user profile-icons"
                        style={{ color: "#a2a9b4" }}
                      />
                      <div
                        className="nav-links"
                        style={{
                          color: "#a2a9b4",
                          marginTop: "0",
                          paddingLeft: "0",
                        }}
                      >
                        <NavLink to="/my-profile">My Profile</NavLink>
                      </div>
                    </li>
                    <li
                      className="nav-item profile-menu"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <i
                        className="fas fa-key profile-icons"
                        style={{
                          color: "#a2a9b4",
                          marginLeft: 27,
                          marginRight: 27,
                        }}
                      />
                      <NavLink
                        to="/my-profile/change-password"
                        className="nav-links"
                        style={{
                          color: "#a2a9b4",
                          marginTop: "0",
                          paddingLeft: "0",
                        }}
                      >
                        Change Password
                      </NavLink>
                    </li>
                    <li
                      onClick={handleLogOut}
                      className="nav-item profile-menu"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <i
                        className="fas fa-power-off profile-icons"
                        style={{
                          color: "#a2a9b4",
                          marginLeft: 27,
                          marginRight: 27,
                        }}
                      />
                      <div
                        className="nav-links"
                        style={{
                          color: "#a2a9b4",
                          marginTop: "0",
                          paddingLeft: "0",
                        }}
                      >
                        Logout
                      </div>
                    </li>
                  </ul>
                ) : null}
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-links"
                  onClick={() => ToogleRegisterModal(true)}
                >
                  {isRegisterModal ? "Register" : "Login"}
                </NavLink>
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
