import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const isVisible = () => {
    setShowPassword(!showPassword);
  };
  const navigator = useNavigate();

  //   login user api call :
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required", {
        position: "top-right",
      });
    }
    if (!password) {
      toast.error("Password is required", {
        position: "top-right",
      });
    } else {
      try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const userData = await axios.post("http://localhost:5000/api/users/login", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        localStorage.setItem("userInfo", JSON.stringify(userData.data));
        setUser(userData.data);
        setEmail("");
        setPassword("");
        toast.success("Login successfully", {
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigator("/mynotes");
        }, 3000);
      } catch (error) {
        setErrorMessage(error.response.data.message);
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log(error.response.data.message);
      }
    }
  };

  const logout = () => {
    console.log("fff");
    localStorage.removeItem("userInfo");
    setUser(null);
    navigator("/login");
  };

  useEffect(() => {
    const tempUser = localStorage.getItem("userInfo") || null;
    setUser(JSON.parse(tempUser));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        handleSubmit,
        errorMessage,
        showPassword,
        setShowPassword,
        isVisible,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
