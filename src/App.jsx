import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importar vistas
import Footer from "./components/Footer";
import Login from "./components/Ingreso";
import Register from "./components/Ingreso";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import CustomNavbar from "./components/Navbar";
import Account from "./pages/Account";
import Ingreso from "./components/Ingreso";

const App = () => {
  return (
    <>
      <CustomNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Ingreso />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
