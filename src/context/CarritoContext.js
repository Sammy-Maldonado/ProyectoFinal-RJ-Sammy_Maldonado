import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (item, cantidad) => {
    if (!productoEnCarrito(item.id)) {
      setCarrito(prev => [...prev, { item, cantidad }]);
    } else {
      setCarrito(prev => prev.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      }));
      console.log("Cantidad del producto actualizada");
    }
  }

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
    setCarrito(carritoActualizado);
    console.log("productos eliminados");
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  const productoEnCarrito = (id) => {
    return carrito.some(prod => prod.item.id === id);
  }

  return (
    <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  )
}