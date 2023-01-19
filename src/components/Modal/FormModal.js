import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
// import ReactFlagsSelect from "react-flags-select";
import Countries from "../Countries/Countries";
import LoginFormModal from "./LoginFormModal";
import { useModalContext } from "../../context/ModalContext";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
const FormModal = () => {
  // state for modal open
  const {
    isLoginModal,
    isRegisterModal,
    ToogleLoginModal,
    ToogleRegisterModal,
  } = useModalContext();

  const {
    name,
    email,
    password,
    phone,
    loginForm,
    setLoginForm,
    handleRegister,
    setName,
    setEmail,
    setPhone,
    setPassword,
    handleImage,
  } = useAuth();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      display: "flex",
      alignItems: "center",
      width: "680px",
      overflow: "hidden",
      height: "100%",
      maxHeight: "528px",
      transform: "translate(-50%, -50%)",
      paddingTop: 0,
      paddingLeft: 0,
      paddingBottom: 0,
    },
  };
  return (
    <div>
      <Modal
        // onAfterClose={() => setOpen(false)}
        contentLabel="Register Modal"
        isOpen={isRegisterModal}
        ariaHideApp={false}
        style={customStyles}
      >
        <div
          style={{
            backgroundColor: "#2874f0",
            color: "white",
            padding: "40px 33px",
            height: "100%",
            minHeight: "414px",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            backgroundImage:
              "url(https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png)",
            backgroundPosition: "center 85%",
            backgroundRepeat: "no-repeat",
          }}
          className="login-modal-bg"
        >
          <div style={{ marginTop: "1.5rem" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 500 }}>Register....</h2>
            <p
              style={{
                fontSize: "18px",
                marginTop: "16px",
                lineHeight: "150%",
                color: "#dbdbdb",
                paddingRight: "1rem",
              }}
            >
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
        </div>
        <form
          onSubmit={handleRegister}
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            paddingLeft: "1rem",
          }}
          className="modal-form"
        >
          <input
            type="text"
            style={{
              width: "350px",
              marginBottom: "1rem",
              padding: "10px",
              border: "1px solid gray",
              borderRadius: "4px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 15px 0px",
            }}
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* {error && (
          <p style={{ marginTop: -5, color: "red", marginLeft: "-18rem" }}>
            Name is required
          </p>
        )} */}
          <input
            type="text"
            style={{
              width: "350px",
              marginBottom: "1rem",
              padding: "10px",
              border: "1px solid gray",
              borderRadius: "4px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 15px 0px",
            }}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PhoneInput
            style={{
              height: "37px",
              marginLeft: "6px",
              width: "350px",
              marginBottom: "1rem",
              padding: "10px",
              border: "1px solid gray",
              borderRadius: "4px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 15px 0px",
            }}
            placeholder="Enter your phone number"
            country="in"
            searchPlaceholder="Search for your country"
            inputProps={{
              name: "phone",
              required: true,
            }}
            onChange={(e) => setPhone(e)}
            value={phone}
            defaultMask="...-...-...."
            alwaysDefaultMask={true}
          />
          <input
            type="file"
            style={{
              width: "350px",
              marginBottom: "1rem",
              padding: "10px",
              border: "1px solid gray",
              borderRadius: "4px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 15px 0px",
            }}
            name="pic"
            onChange={handleImage}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "350px",
              marginBottom: "1rem",
              padding: "10px",
              border: "1px solid gray",
              borderRadius: "4px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 15px 0px",
            }}
            placeholder="Enter your password"
          />
          {/* {error && <p style={{ marginTop: -5, color: "red", marginLeft: "-15rem" }}>Description is required</p>} */}
          <button
            type="submit"
            style={{
              width: "350px",
              marginTop: "1rem",
              marginBottom: "1rem",
              padding: "10px",
              backgroundColor: "#B22222",
              color: "white",
              fontSize: "18px",
              textTransform: "uppercase",
              border: "1px solid white",
              borderRadius: "5px",
            }}
            className="modal-button"
          >
            Sign Up
          </button>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p>
              Already have an account yet?{" "}
              <span
                style={{
                  color: "blue",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  ToogleLoginModal(true);
                  ToogleRegisterModal(false);
                }}
              >
                Login Now!
              </span>
            </p>
          </div>
        </form>
        <div
          style={{ position: "absolute", top: 20, right: 20 }}
          onClick={() => ToogleRegisterModal(false)}
        >
          <i
            className="fas fa-times"
            style={{ fontSize: 25, cursor: "pointer" }}
          />
        </div>
      </Modal>
      <LoginFormModal open={isLoginModal} setOpen={ToogleLoginModal} />
    </div>
  );
};

export default FormModal;
