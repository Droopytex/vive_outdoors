import { createContext, useEffect, useState } from "react";

// Creación del context
export const viveContext = createContext();

const viveOutdoorProvider = ({ children }) => {
  const [producto, setProducto] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const res = await fetch("/viveOutdoor_admin.json");
    const producto = await res.json();
    setProducto(producto);
    console.log(producto);
  };

  return (
    <viveContext.Provider
      value={{
        producto,
        setProducto,
        carrito,
        setCarrito,
      }}
    >
      {children}
    </viveContext.Provider>
  );
};

export default viveOutdoorProvider;
