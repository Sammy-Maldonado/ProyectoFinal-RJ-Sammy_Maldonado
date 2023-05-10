import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img, stock }) => {

  return (
    <div className='cardProducto'>
      <img className='imgProducto' src={img} alt={nombre} />
      <h3>Nombre: {nombre}</h3>
      <p>Precio: {precio}</p>
      <p>Stock: {stock}</p>
      <p>ID: {id}</p>
      <Link to={`/item/${id}`}><button className='btnProducto'> Ver Detalles </button></Link>
    </div>
  )
}

export default Item