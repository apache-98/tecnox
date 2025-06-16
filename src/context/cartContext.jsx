import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";




const CartContext = createContext();

export const CartProvider = ({ children }) => {
    //agregar logica de carrito de compras
    const [car, setCar] = useState([])
    const [total, setTotal] = useState(0);

    const addCar = (product) => {
        const exists = car.some(item => item.id === product.id);
        if (!exists) {
            setCar([...car, product]);
        } else {
        }
    };

    const removeItem = (productItem) => {
        setCar(prev => prev.filter(item => item.id !== productItem));
    };

    useEffect(() => {
        const totalPrice = car.reduce((sum, item) => sum + item.price, 0);
        setTotal(totalPrice);
    }, [car]);





    const value = {
        // productos: [productos],
        // // menu:[menu, setMenu],
        addCar,
        car,
        removeItem,
        total
    }


    return (

        <>
            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>

        </>
    )


}

export function useCart() {

    return useContext(CartContext);
}