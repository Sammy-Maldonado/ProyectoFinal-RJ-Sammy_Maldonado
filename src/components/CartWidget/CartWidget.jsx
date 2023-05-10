import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { calcularCantidadTotal } from "../Cart/Cart";

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);
  const totalCantidad = calcularCantidadTotal(carrito);
  const imgCarrito = "./img/carrito-de-compras.png"
  return (
    <Link to='/cart' className='link-carrito-container'>
      <div className='carrito-container' id='carrito-container'>
        <img className='carritoDeCompras me-2 img-fluid' src={imgCarrito} alt="carrito de compras de great templates" />
        {
          totalCantidad
        }
      </div>
    </Link>

  )
}

export default CartWidget


