import { createContext, useEffect, useState } from "react";

// Creación del context
export const viveContext = createContext();

const viveOutdoorProvider = ({ children }) => {
  const [producto, setProducto] = useState([]); //arreglo para almacenar los productos disponibles
  const [carrito, setCarrito] = useState([]); //arreglo para almacenar los productos agregados al carrito

  useEffect(() => { // Este efecto se ejecuta una sola vez cuando el componente se monta, llamando a getProductos() para cargar los datos de los productos.
    getProductos();
  }, []);

  const getProductos = async () => {  // es una función asincrónica que obtiene los datos de los productos de un archivo JSON y actualiza el estado "producto" con los datos obtenidos
    const res = await fetch("/viveOutdoor_productos.json"); 
    const producto = await res.json();
    setProducto(producto);
    console.log(producto); // la consola muestra la actualización del producto
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
