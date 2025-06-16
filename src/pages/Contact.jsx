import React from 'react'
import { useUser } from '../context/useContext';

export function Contact() {
    const { user } = useUser();

  if (!user) {
    return (
      <div className=" w-screen min-h-screen p-10 text-center text-red-500 font-bold">
        Debes iniciar sesión para ver tu historial de compras.
      </div>
    );
  }
  return (
        <div className=" w-screen min-h-screen bg-badgroud2 px-10 py-12 text-textprimary">
      <h1 className="text-3xl font-bold mb-6">Historial de Compras de {user.name}</h1>

      {user.orders?.length === 0 ? (
        <p>No has comprado ningún producto todavía.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {user.orders.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700 text-sm mb-2">{item.description}</p>
              <p className="text-lg font-bold text-botton">Precio: ${item.price}</p>
              <p className="text-sm text-gray-500">Categoría: {item.category.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
