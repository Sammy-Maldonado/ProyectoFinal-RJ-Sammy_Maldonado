import './CartItem.css'
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext'
import { ToastContainer, toast } from 'react-toastify';

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);
  const precioTotal = item.precio * cantidad;

  const handleEliminarProducto = () => {
    eliminarProducto(item.id);
    toast.success('Producto eliminado del carrito', { autoClose: 1400 });
  }

  return (
    <div className='carrito__contenedor'>
      <div className='carrito__contenedor-2 row d-flex justify-content-center py-3'>
        <div className='carrito__p__container col-1 '>
          <p className='carrito__p'></p>
        </div>
        <div className='carrito__p__container col-1 d-flex justify-content-center align-items-center'>
          <h4 className="carrito__p cart-item__name">{item.nombre}</h4>
        </div>
        <div className='carrito__p__container col-1'>
          <p className='carrito__p'></p>
        </div>
        <div className='carrito__p__container col-1'>
          <p className='carrito__p'></p>
        </div>
        <div className='carrito__p__container col-1 d-flex justify-content-center align-items-center'>
          <p className='carrito__p cart-item__quantity'>{cantidad}</p>
        </div>
        <div className='carrito__p__container col-1 d-flex justify-content-center align-items-center'>
          <p className='carrito__p cart-item__price'>${item.precio}</p>
        </div>
        <div className='carrito__p__container col-1 d-flex justify-content-center align-items-center'>
          <p className='carrito__p'>${precioTotal}</p>
        </div>
        <div className='carrito__p__container col-1'>
          <button onClick={handleEliminarProducto} className='boton__cartItem'>Eliminar producto</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default CartItem