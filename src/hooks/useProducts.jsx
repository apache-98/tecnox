import React from 'react'
import { useEffect, useState } from 'react'
import { productsService } from '../services/productsService.js'

export function useProducts() {

    const [products, setProducts] = useState([])

    async function fetchProducts() {

        try {
            const data = await productsService();
            console.log("data sin filtrar:", data);
            // setProducts(data)
            const techproducts = data
            
                .filter(products => products.category?.name === 'Electronics')
                data.forEach(prod => console.log(prod.category?.name));
            
            setProducts(techproducts);

        } catch (e) {
            console.error("error inesperado", e)

        }

    }

    useEffect(() => {
        fetchProducts();
    }, [])


    return {
        products,
    }


}
