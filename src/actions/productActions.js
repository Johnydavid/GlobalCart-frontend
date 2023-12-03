import axios from "axios";
import { productsFailure, productsRequest, productsSuccess } from "../slices/productsSlice";
import { productFailure, productRequest, productSuccess } from "../slices/productSlice";

export const getProducts = (keyword, price, category, ratings, currentPage) => async (dispatch)=>{
    try{
        dispatch(productsRequest())
        let link = `/api/products?page=${currentPage}`

        if (keyword){
            link += `&keyword=${keyword}`
        }

        if(price){
            link += `&price[gte]=${price[0]}&price[lte]=${price[1]}`
        }


        if(category){
            link += `&category=${category}`
        }

        if(ratings){
            link += `&ratings=${ratings}`
        }


        const {data} = await axios.get(link)
        dispatch(productsSuccess(data))

    }catch(error){
        // Handling Error
        dispatch(productsFailure(error.response.data.message))

    }
    
}




export const getProduct = id => async (dispatch)=>{
    try{
        dispatch(productRequest())
        const {data} = await axios.get(`/api/product/${id}`)
        dispatch(productSuccess(data))

    }catch(error){
        // Handling Error
        dispatch(productFailure(error.response.data.message))

    }
    
}