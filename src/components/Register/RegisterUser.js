import axios from "axios";
import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const navigate = useNavigate();
  // const [value, setValue] = useState()

  console.log("phone", phone);
  const handleSubmit = (e) => {
    e.preventDefault();
    let p = phone.substring(2, 13);
    const data = { name, email, phone:p, password };
    console.log("data", data);
    if (!name || !email || !phone || !password) {
      setError(true);
      return;
    }
    try {
      axios.post("http://localhost:5000/api/users/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/verify-email");
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log(error.response);
    }
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setPassword("");
  };

  return (
    <div className="register-user-main">
      <h2>Register Yourself here</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <input
          type="text"
          style={{
            width: "400px",
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
            width: "400px",
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
            width: "400px",
            marginBottom: "1rem",
            padding: "10px",
            border: "1px solid gray",
            borderRadius: "4px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 15px 0px",
          }}
          placeholder="Enter your phone number"
          country="in"
          inputProps={{
            name: "phone",
            required: true,
          }}
          onChange={(e) => setPhone(e)}
          value={phone}
          defaultMask="...-...-...."
          alwaysDefaultMask={true}
        />
        {/* <input
          type="text"
          value={phone}
          name="phone"
          onChange={(e) => handlePhone(e)}
          style={{
            width: "400px",
            marginBottom: "1rem",
            padding: "10px",
            border: "1px solid gray",
            borderRadius: "4px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 15px 0px",
          }}
          placeholder="Enter your phone number"
        /> */}
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "400px",
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
            width: "400px",
            marginTop: "1rem",
            marginBottom: "1rem",
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            fontSize: "18px",
            textTransform: "uppercase",
            border: "1px solid white",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterUser;
