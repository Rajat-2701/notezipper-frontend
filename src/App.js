import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginUser from "./components/Login/LoginUser";
import RegisterUser from "./components/Register/RegisterUser";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/mynotes" element={<MyNotes />} />
        <Route exact path="/register" element={<RegisterUser />} />
        <Route exact path="/login" element={<LoginUser />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
