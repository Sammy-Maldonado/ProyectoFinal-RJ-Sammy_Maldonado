import './Checkout.css'
import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../services/firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  const handleVaciarCarrito = () => {
    vaciarCarrito();
    navigate('/')
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden");
      return;
    }

    if (carrito.length === 0) {
      setError("No se puede generar una orden con el carrito vacío");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrderId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.error("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden, vuelva mas tarde");
      })
  }

  return (
    <div>
      <div className="container checkout">
        <div className="pt-5 row justify-content-between">
          <div className="col-md-6">
            <div className='d-flex justify-content-center'>
              <Link to={'/'} > <img className='logo__checkout rounded-4' src="../../img/great-16-9.png" alt="Logo Great templates" /> </Link>
            </div>
            <Form onSubmit={handleSubmit}>
              <hr />
              <h4>Información personal</h4>
              <div className='row'>
                <div className='col'>
                  <Form.Group>
                    <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Nombre' />
                  </Form.Group>
                </div>
                <div className='col'>
                  <Form.Group>
                    <Form.Control type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" />
                  </Form.Group>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <Form.Group>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" />
                  </Form.Group>
                </div>
                <div className='col'>
                  <Form.Group>
                    <Form.Control type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} placeholder="Confirme Correo electrónico" />
                  </Form.Group>
                </div>
                {error && <p style={{ color: "red", margin: 0 }}> {error} </p>}
                <Form.Group>
                  <Form.Control type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Número de teléfono" />
                </Form.Group>
              </div>
              <hr />
              <h4>Datos de envío</h4>
              <Form.Group>
                <Form.Control type="text" placeholder="Dirección" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="Departamento, N° casa, villa, etc. (opcional)" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="Código postal" />
              </Form.Group>
              <div className="buttons__container mb-4 d-flex justify-content-between align-items-center">
                <Link to='/cart'>← Volver al Carrito</Link>
                <button type='submit' onClick={() => {
                  if (carrito.length === 0 || !nombre || !apellido || !telefono || !email || !emailConfirmacion || email !== emailConfirmacion) {
                    setError('Por favor, completa todos los campos y asegúrate de que tu dirección de correo electrónico coincida.')
                    return;
                  } else {
                    Swal.fire({
                      title: '¡Gracias por tu compra!',
                      icon: 'success',
                      timer: 1250,
                      showConfirmButton: false
                    })
                  }
                }} >Finalizar Compra</button>
              </div>
            </Form>
            {
              orderId && (
                <strong>¡Gracias por tu compra! Tu numero de orden es {orderId}</strong>
              )
            }
          </div>

          <div className="col-md-4">
            <h2>Resumen de compra</h2>
            {carrito.map((producto) => (
              <div key={producto.item.id}>
                <hr />
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{producto.item.nombre}</h5>
                    <p className="card-cantidad card-text m-0">Cantidad: {producto.cantidad}</p>
                    <p className="card-text">Precio unitario: ${producto.item.precio}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Envío: <b className='envio-style'>Gratis</b></li>
                    <li className="list-group-item">Total: {producto.item.precio * producto.cantidad} </li>
                  </ul>
                </div>
              </div>
            ))
            }
            {carrito.length > 0 ? (
              <div className='vaciarCarrito__container d-flex align-items-center justify-content-end my-3'>
                <button className='vaciar__carrito' onClick={() => {
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
                      handleVaciarCarrito();
                    } else {
                    }
                  });
                }}>Vaciar Carrito</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout