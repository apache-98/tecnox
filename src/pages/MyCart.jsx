import { useCart } from '../context/CartContext';
import { Icon } from '@iconify/react';


export function MyCart() {
    const { car, removeItem, total } = useCart();
    return (
        <>
            <div className='bg-badgroud2 w-screen min-h-screen flex justify-center gap-4'>

                <div className="text-textprimary p-12">
                    <h1 className="text-2xl font-bold mb-4">Carrito de compras</h1>

                    {car.length === 0 ? (
                        <p>No hay productos en el carrito.</p>
                    ) : (
                        <div className="flex flex-wrap gap-6 text-center">
                            {car.map((item) => (
                                <div key={item.id} className="border p-4 rounded shadow w-[300px]">
                                    <img
                                        src={item.images}
                                        alt="imagen"
                                        className="w-full h-[200px] object-contain mb-4"
                                    />
                                    <h2 className="font-bold text-xl mb-2">{item.title}</h2>
                                    <p className="text-xl">Precio: ${item.price}</p>
                                    <div className='text-center flex justify-center'>
                                        <Icon icon={"mdi-light:delete"} width={30} hanging={30} onClick={() => removeItem(item.id)} className=' mt-4 text-red-500 hover:text-red-700 ' />

                                     </div>
                                    
                                </div>
                            ))}
                        </div>
                    )}
                    <div className=" text-textprimary text-center text-3xl font-bold bg-coloracent mt-24 pt-8 mb-4">
                        Total a pagar: <span className="text-textprimary">${total}</span>

                    </div>
                    <div  className=" text-textprimary text-center text-3xl font-bold">
                        <button className="bg-botton hover:bg-hoverbotton text-white px-2 py-1 rounded">Pagar</button>
                    </div>

                </div>
            </div>




        </>

    )
}
