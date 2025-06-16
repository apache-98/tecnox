import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ipods from "../assets/ipods.jpg";
import pc from "../assets/pc.jpg";
import pcgamer from "../assets/pcgamer.jpg";
import celulares from "../assets/celulares.jpg";
import audi from "../assets/audi.jpg";
import juego from "../assets/juego.jpg";
import { useCart } from '../context/CartContext';
import { useProducts } from '../hooks/useProducts';
import { Card } from 'antd';
const { Meta } = Card;

export function Home() {
    const { products } = useProducts();
  const onChange = currentSlide => {
    console.log(currentSlide);
  };

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
    Swal.fire({
      title: products.title,
      html: `
        <div style="display: flex; justify-content: center;">
          <img 
            src="${products.images[0]}" 
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
        <p style="margin-top: 15px;">${products.description}</p>
        <h3 style="color: #00BCD4; margin-top: 10px;">Precio: $${products.price}</h3>
        <small style="color: gray;">Categoría: ${products.category?.name}</small>
      `,
      width: '500px', // Tamaño total del modal
      background: '#fff',
      confirmButtonText: 'Cerrar',
    });
  }

  return (
    <>
      <Carousel afterChange={onChange}>
        <div>
          <h3 ><img src={ipods} alt="audifonos" className='w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover' /></h3>
        </div>
        <div>
          <h3 ><img src={pc} alt="computador" className='w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover' /></h3>
        </div>
      </Carousel>

      <div className='bg-badgroud2 min-h-screen w-screen'>
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-textprimary pt-12">Conoce nuestras catergorias </h1>
        {/* inicio de div que encierra mis imagenes en circulo y me las ordena horizontalemte */}
        <div className="flex justify-center items-center gap-8 flex-wrap px-4">
          <div className='flex flex-col items-center'>
            <div className="w-32 h-32 overflow-hidden rounded-full ">
              <Link to="/Products"><img src={pcgamer} alt="PC Gamer" className="w-full h-full object-cover" /></Link>
              
            </div>
            <p className="mt-2 text-center text-textprimary font-semibold">Computadores</p>
          </div>


          <div className='flex flex-col items-center'>
            <div className="w-32 h-32 overflow-hidden rounded-full ">
              <Link to="/Products"><img src={celulares} alt="PC Gamer" className="w-full h-full object-cover" /></Link>
              
            </div>
            <p className="mt-2 text-center text-textprimary font-semibold">Celulares</p>
          </div>


          <div className='flex flex-col items-center'>
            <div className="w-32 h-32 overflow-hidden rounded-full ">
              <Link to="/Products"><img src={audi} alt="PC Gamer" className="w-full h-full object-cover" /></Link>
              
            </div>
            <p className="mt-2 text-center text-textprimary font-semibold">Audifonos</p>
          </div>


          <div className='flex flex-col items-center'>
            <div className="w-32 h-32 overflow-hidden rounded-full ">
              <Link to="/Products"><img src={juego} alt="PC Gamer" className="w-full h-full object-cover" /></Link>
              
            </div>
            <p className="mt-2 text-center text-textprimary font-semibold">consolas</p>
          </div>
        </div>
        {/* aqui termina el div  */}

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-textprimary pt-12 pl-12">Productos mas <span className='text-coloracent'>vendidos</span> </h1>
          <p className="text-coloracent font-semibold pl-12"> Todo lo que buscas en un solo lugar </p>
          <section className="bg-badgroud2 sm:pl-6 md:pl-12 pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8 ">

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
      </div>

    </>


  )
}
