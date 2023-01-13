import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useModalContext } from "./ModalContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const { ToogleLoginModal } = useModalContext();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  

  const isVisible = () => {
    setShowPassword(!showPassword);
  };
  const navigator = useNavigate();


// register user api call : 
const handleRegister = (e) => {
  e.preventDefault();
  let p = phone.substring(2, 13);
  const data = { name, email, phone:p, password };
  console.log("data", data);
  if (!name) {
    toast.error("Name is required", {
      position: "top-right",
    });
  }
  if (!email) {
    toast.error("Email is required", {
      position: "top-right",
    });
  }
  if (!phone) {
    toast.error("Phone number is required", {
      position: "top-right",
    });
  }
  if (!password) {
    toast.error("Password is required", {
      position: "top-right",
    });
  }
  else{
    try {
      axios.post("http://localhost:8000/api/users/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Register successfully", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigator("/login");
        ToogleLoginModal(true)
      }, 3000);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
  setName("");
  setEmail("");
  setPhone("");
  setPassword("");
  setPassword("");
};

  //   login user api call :
  const handleLogin = async (e) => {
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
        const userData = await axios.post("http://localhost:8000/api/users/login", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        localStorage.setItem("userInfo", JSON.stringify(userData.data));
        setUser(userData.data);
        setEmail("");
        setPassword("");
        setOpen(false);
        toast.success("Login successfully", {
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigator("/");
          ToogleLoginModal(true)
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
        handleLogin,
        handleRegister,
        errorMessage,
        showPassword,
        setShowPassword,
        isVisible,
        name,
        setName,
        phone,
        setPhone,
        open,
        setOpen,
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
