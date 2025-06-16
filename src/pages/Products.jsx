import Swal from 'sweetalert2';
import { Carousel } from 'antd';
import { useProducts } from '../hooks/useProducts';
import { Card } from 'antd';
import { useCart } from '../context/CartContext';
import fondoprod from "../assets/fondoprod.jpg";
import ventilador from "../assets/ventilador.jpg";
const { Meta } = Card;

export function Products() {
  const onChange = currentSlide => {
    console.log(currentSlide);
  };

  const { products } = useProducts();

  console.log("productss desde componentes", products)

  const { addCar } = useCart();
  function agregar(product) {
    addCar(product);
    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: `${product.title} ha sido agregado al carrito.`,

    });
  }

  function verMas(products) {
    const imageUrl = products.images && products.images.length > 0
      ? products.images[0]
      : 'https://via.placeholder.com/150'; // imagen por defecto

    Swal.fire({
      title: products.title,
      html: `
      <div style="display: flex; justify-content: center;">
        <img 
          src="${imageUrl}" 
          alt="${products.title}" 
          style="
            max-width: 100%; 
            max-height: 200px; 
            object-fit: contain; 
            border-radius: 8px; 
            background: #f3f3f3; 
            padding: 10px;"
        />
      </div>
      <p style="margin-top: 15px;">${products.description || 'Sin descripción disponible.'}</p>
      <h3 style="color: #00BCD4; margin-top: 10px;">Precio: $${products.price || 'N/A'}</h3>
      <small style="color: gray;">Categoría: ${products.category?.name || 'Sin categoría'}</small>
    `,
      width: '500px',
      background: '#fff',
      confirmButtonText: 'Cerrar',
      // Swal.fire({
      //   title: products.title,
      //   html: `
      //     <div style="display: flex; justify-content: center;">
      //       <img 
      //         src="${products.images[0]}" 
      //         alt="${products.title}" 
      //         style="
      //           max-width: 100%; 
      //           max-height: 200px; 
      //           object-fit: contain; 
      //           border-radius: 8px; 
      //           background: #f3f3f3; 
      //           padding: 10px;"
      //       />
      //     </div>
      //     <p style="margin-top: 15px;">${products.description}</p>
      //     <h3 style="color: #00BCD4; margin-top: 10px;">Precio: $${products.price}</h3>
      //     <small style="color: gray;">Categoría: ${products.category?.name}</small>
      //   `,
      //   width: '500px', // Tamaño total del modal
      //   background: '#fff',
      //   confirmButtonText: 'Cerrar',
    });
  }

  return (
    <>

      <Carousel afterChange={onChange}>
        <div>
          <h3 ><img src={fondoprod} alt="audifonos" className='w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover' /></h3>
        </div>
        <div>
          <h3 ><img src={ventilador} alt="computador" className='w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover' /></h3>
        </div>

      </Carousel>


      <div className='bg-badgroud2 w-screen min-h-screen'>
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-textprimary pt-12">Explora lo Último en Tecnología </h1>
        <h1 className="text-2xl sm:text-2xl font-bold text-center text-coloracent pt-2 pb-12">¡Compra con Confianza! </h1>
        <section className="bg-badgroud2 sm:pl-6 md:pl-12 pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">

          {
            products.map((item) => (
              <Card
                className='mb-16'
                key={item.id}
                hoverable
                style={{ width: 350 }}
                cover={<img src={item.images} alt="imagen" className=" w-[300px] h-[350px] object-contain" />}
              >
                <Meta className='text-center' title={item.title} />
                <p className="mt-2 font-bold text-green-600 text-lg  text-center">Precio: ${item.price}</p>
                <div className="mt-2 flex flex-col gap-2">
                  <button onClick={() => agregar(item)} className="bg-botton hover:bg-hoverbotton text-white px-2 py-1 rounded">
                    Agregar al carrito
                  </button>
                  <button onClick={() => verMas(item)} className="bg-coloracent text-white px-2 py-1 rounded">
                    Ver más
                  </button>
                </div>
              </Card>

            ))
          }

        </section>
      </div>



    </>
  )
}
