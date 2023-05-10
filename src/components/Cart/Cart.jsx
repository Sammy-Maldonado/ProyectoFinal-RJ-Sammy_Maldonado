import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'
import Swal from 'sweetalert2'

export const calcularCantidadTotal = (carrito) => {
  return carrito.reduce((total, producto) => total + producto.cantidad, 0);
}

const Cart = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext)

  const totalCantidad = calcularCantidadTotal(carrito);

  const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

  if (totalCantidad === 0) {
    return (
      <>
        <div className="carritoVacio d-flex justify-content-center align-items-center">
          <div>
            <h2 className='carritoVacio__h2'>TU CARRITO ESTA VACÍO</h2>
            <button className='btn_fzc3'>
              <Link className='btn_fzc2' to='/'> Ver más productos </Link>
            </button>
          </div>
        </div>
      </>
    )
  }

  const handleCancelClick = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <h2 className='titulo2 d-flex justify-content-center my-4'>Carrito de compras</h2>
      <div className='page__content'>
        <div className='carrito__contenedor pb-2'>
          <div className='carrito__contenedor-2 row d-flex justify-content-center'>
            <div className='carrito__p__container col-1 '>
              <p className='carrito__p'></p>
            </div>
            <div className='carrito__p__container col-1 d-flex justify-content-center align-items-center'>
              <p className='carrito__p'>Productos</p>
            </div>
            <div className='carrito__p__container col-1'>
              <p className='carrito__p'></p>
            </div>
            <div className='carrito__p__container col-1'>
              <p className='carrito__p'></p>
            </div>
            <div className='carrito__p__container col-1 d-flex justify-content-center align-items-center'>
              <p className='carrito__p'>Cantidad</p>
            </div>
            <div className='carrito__p__container col-1 d-flex justify-content-center align-items-center'>
              <p className='carrito__p'>Precio unidad</p>
            </div>
            <div className='carrito__p__container col-1 d-flex justify-content-center align-items-center'>
              <p className='carrito__p'>Total</p>
            </div>
            <div className='carrito__p__container col-1'>
              <p className='carrito__p'></p>
            </div>
          </div>
        </div>

        {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
        <h3 className='h3__total mb-4 mt-5 d-flex justify-content-end'>Total: ${total}</h3>
        <h6 className='d-flex justify-content-end mb-3'>Gastos de envío y descuentos calculados al finalizar la compra</h6>
        <div className='d-flex justify-content-end'>
          <button onClick={() => {
            Swal.fire({
              title: "¿Esta seguro de que desea vaciar el carrito?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: 'Vaciar',
              cancelButtonText: 'Cancelar',
              dangerMode: true,
            }).then((vaciar) => {
              if (vaciar.isConfirmed) {
                Swal.fire({
                  title: "¡El carrito ha sido vaciado!",
                  icon: "success",
                  confirmButtonText: "Aceptar",
                });
                vaciarCarrito();
              } else {
                handleCancelClick();
              }
            });
          }} >Vaciar Carrito</button>
          <button className='mx-3'><Link className='btn_fzc2' to={'/'} >Ver más productos</Link></button>
          <button><Link to='/checkout' className='btn_fzc2'> Finalizar Compra </Link></button>
        </div>
      </div>
    </div>
  )

}

export default Cart