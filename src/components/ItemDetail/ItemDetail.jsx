import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { useState } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem rounded-4'>
      <h2 className='mt-4'>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <div>
        <div className='m-4 d-flex align-items-center row'>
          <p className='px-5 m-0 d-flex align-items-center justify-content-center'>
            {descripcion}
          </p>
        </div>
        <h5>Entre sus características, podemos destacar:</h5>
        <br />
        <div className='bullets_container row'>
          <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-1 col-sm-1 col-1"></div>
          <ul className='col-xxl-7 col-xl-8 col-lg-8 ul_bullets col-md-10 col-sm-10 col-10'>
            <li>Diseño responsive, que garantiza que la plantilla se adapte a cualquier tamaño de pantalla.</li>
            <li>Diseño retina ready, lo que significa que la plantilla tiene una alta resolución y una excelente calidad de imagen.</li>
            <li>Cuatro opciones de navegación en una sola página, lo que permite una fácil exploración de la plantilla.</li>
            <li>Código HTML5 y CSS3, que garantizan la compatibilidad y la velocidad de carga.</li>
            <li>Diseño único, que le dará a su presentación personal un toque especial.</li>
            <li>Feed de Twitter e Instagram, lo que le permite compartir su presencia en las redes sociales con sus visitantes.</li>
            <li>Fondos de paralaje que crean un efecto visual impresionante.</li>
            <li>Páginas de un solo proyecto que le permiten presentar sus proyectos de manera clara y concisa.</li>
            <li>Página única del blog y página de detalles del blog, que le permiten compartir sus pensamientos y opiniones con su audiencia.</li>
          </ul>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-1 col-sm-1 col-1"></div>
        </div>
        <br />
      </div>
      <img className='img__itemDetail rounded-3' src={img} alt={nombre} />

      <div className='d-flex justify-content-center my-4'>
        {
          agregarCantidad > 0 ? (
            <div className='ItemCount_container d-flex justify-content-center'>
              <button className='me-4' ><Link className='btn_fzc d-flex' to="/"> Ver más productos </Link></button>
              <button className='ms-4' ><Link className='btn_fzc d-flex' to="/cart"> Finalizar Compra </Link></button>
            </div>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
      </div>
    </div>
  )
}

export default ItemDetail