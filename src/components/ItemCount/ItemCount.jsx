import './ItemCount.css'
import Swal from 'sweetalert2'
import { useState } from 'react';

const ItemCount = ({ stock, inicial, funcionAgregar }) => {
  const [itemCount, setItemCount] = useState(inicial);

  const sumar = () => {
    if (itemCount < stock) {
      setItemCount(itemCount + 1);
    }
  }

  const restar = () => {
    if (itemCount > inicial) {
      setItemCount(itemCount - 1);
    }
  }

  function funcionAlerta(itemCount) {
    Swal.fire({
      title: 'Productos agregados al carrito',
      text: `Cantidad: ${itemCount}`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  return (
    <div className='ItemCount_container-count d-flex justify-content-center my-4'>
      <div className='ItemCount_container d-flex justify-content-center'>
        <div className="btn_container d-flex justify-content-evenly align-items-center">
          <div className='btn_border d-flex justify-content-between align-items-center'>
            <button className='btn1' onClick={restar}> - </button>
            <strong className='item__count px-2'> {itemCount} </strong>
            <button className='btn1' onClick={sumar} > + </button>
          </div>
        </div>
        <button onClick={() => {
          funcionAlerta(itemCount)
          funcionAgregar(itemCount)
        }}>Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default ItemCount