
// SERVICE

import axios from "axios";

const url = "https://fakestoreapi.com/products/"
// Get All Products
export async function getProduct() {
    try {
        return await axios.get(url)
    }catch(err) {
        console.log(err.message)
    }
}




