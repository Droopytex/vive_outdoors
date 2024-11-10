import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

//  redirige al usuario a diferentes páginas según su rol.

const Dashboard = () => {
  const { user, role } = useContext(AuthContext);

  if (role === "admin") {
    return <AdminDashboard />; // Componente solo para administradores
  } else if (role === "client") {
    return <UserDashboard />; // Componente solo para clientes
  } else {
    return <div>No tienes permisos para acceder a esta página</div>; //Mensaje en caso de User no identificado
  }
};

export default Dashboard;
