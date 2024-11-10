import { Routes, Route } from "react-router-dom";

// importar vistas
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import CustomNavbar from "./components/Navbar";
import Account from "./pages/Account";
import Sale from "./pages/CategoriaSale";
import SacosColchonetas from "./pages/CategorySacos";
import Carpas from "./pages/CategoriaCarpa";
import Mochilas from "./pages/CategoriaMochilas";
import Accesorios from "./pages/CategoriaAccesorios";

const App = () => {
  return (
    <>
      <CustomNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/carpas" element={<Carpas />} />
          <Route path="/mochilas" element={<Mochilas />} />
          <Route path="/sacos&colchonetas" element={<SacosColchonetas />} />
          <Route path="/accesorios" element={<Accesorios />} />

          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/account" element={<Account />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
