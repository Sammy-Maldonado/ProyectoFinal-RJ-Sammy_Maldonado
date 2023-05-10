import { useState, useEffect } from 'react'
import { getProducts, getProductosPorCategoria } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts;
    funcionProductos(idCategoria)
      .then(res => setProducts(res))
      .catch(error => console.error(error))
  }, [idCategoria]);

  return (
    <div>
      <h2 className='titulo2 mx-5 my-3 d-flex justify-content-center'> Tu página con los mejores templates </h2>
      <h2 className='d-flex justify-content-center'>Productos</h2>
      <ItemList products={products} />
      <></>
    </div>
  )
}

export default ItemListContainer