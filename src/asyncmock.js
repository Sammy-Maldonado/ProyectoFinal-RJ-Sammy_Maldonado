import { db } from "./services/firebase/config.js"
import { getDocs, getDoc, doc, collection, query, where } from 'firebase/firestore';

export const getProducts = async () => {
  const queryProducts = await getDocs(collection(db, 'products'));
  const products = queryProducts.docs.map(doc => doc.data());
  return products;
}

export const getUnProducto = async (id) => {
  const productRef = doc(db, 'products', id);
  const docSnapshot = await getDoc(productRef);
  const product = docSnapshot.data();
  return product;
}

export const getProductosPorCategoria = async (idCat) => {
  const productosPorCat = query(collection(db, 'products'), where('idCat', '==', idCat));
  const querySnapshot = await getDocs(productosPorCat);
  const productosCategoria = querySnapshot.docs.map(doc => doc.data());
  return productosCategoria;
}