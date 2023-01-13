import React from "react";
import { Outlet } from "react-router-dom";
import LoginFormModal from "../Modal/LoginFormModal";

const PrivateComponent = () => {
  const auth = localStorage.getItem("userInfo");
  return auth ? <Outlet /> : <LoginFormModal />;
};

export default PrivateComponent;
