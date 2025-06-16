import React from 'react'
import axios from 'axios';


export async function productsService() {

    const API_URL = "https://api.escuelajs.co/api/v1/products"

    try {
        const reponse = await axios.get(API_URL)
        console.log (reponse);
        return reponse.data

    } catch (error){
        console.log ("ups no se pudo mostrar la info", error)
    }

}


"https://fakestoreapi.com/products"

"https://api.escuelajs.co/api/v1/products"