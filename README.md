Herramientas utilizadas

La aplicación es un e-commerce que vende templates o diseños para crear páginas web totalmente responsives, intuitivas y fáciles de usar. Fue desarrollada utilizando el framework React, una de las herramientas más populares para la creación de aplicaciones web de una sola página (SPA).

Navegación y rutas

La navegación dentro de la aplicación es muy intuitiva. Los usuarios pueden acceder a la página de inicio donde se encuentran todos los templates disponibles y también pueden acceder a la página de detalle de cada template para ver más información. La aplicación también cuenta con un carrito de compras que muestra los templates seleccionados por el usuario y el costo total de la compra.

En cuanto a las rutas, se utilizó React Router para manejar la navegación. React Router es una librería de enrutamiento que permite manejar la navegación en una aplicación de React.

Base de datos

Para la base de datos se utilizó Firebase, una plataforma de servicios de desarrollo de aplicaciones que ofrece un conjunto completo de herramientas para la creación de aplicaciones web y móviles. La base de datos cuenta con dos colecciones: "products" y "ordenes". En la colección "products" se encuentra toda la información de los templates disponibles, como la descripción, el ID, el ID de categoría, la ruta de la imagen, el nombre, el precio y el stock.

En la colección "ordenes" se generan las órdenes de compra utilizando un formulario final en el checkout. Cuando un usuario realiza una compra, se registra una nueva entrada en la colección "ordenes" con la información de la orden, incluyendo los templates comprados, el costo total y la información de envío.

Librerías adicionales

Además de React y Firebase, se utilizaron dos librerías adicionales: Toastify y Sweetalert2. Toastify es una librería que permite mostrar notificaciones de manera elegante en la aplicación. Sweetalert2, por su parte, es una librería que permite crear diálogos personalizados y atractivos para el usuario.

Conclusión

En resumen, la aplicación es un e-commerce que vende templates para crear páginas web responsives, intuitivas y fáciles de usar. Fue desarrollada utilizando React y Firebase como base de datos. Además, se utilizó la librería de enrutamiento React Router y las librerías adicionales Toastify y Sweetalert2 para mejorar la experiencia del usuario. La aplicación cuenta con una navegación intuitiva y ofrece una experiencia de compra fácil y eficiente.
