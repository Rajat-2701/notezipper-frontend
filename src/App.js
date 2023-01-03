import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Contact from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginUser from "./components/Login/LoginUser";
import PrivateComponent from "./components/PrivateComponents/PrivateComponent";
import RegisterUser from "./components/Register/RegisterUser";
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <ToastContainer theme="dark" style={{ marginTop: 100 }} />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/mynotes" element={<MyNotes />} />
            <Route exact path="/contact" element={<Contact />} />
          </Route>
          <Route exact path="/register" element={<RegisterUser />} />
          <Route exact path="/login" element={<LoginUser />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
