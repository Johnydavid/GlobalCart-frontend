import axios from "axios";
import { productsFailure, productsRequest, productsSuccess } from "../slices/productsSlice";

export const getProducts = async (dispatch)=>{
    try{
        dispatch(productsRequest())
        const {data} = await axios.get('/api/products')
        dispatch(productsSuccess(data))

    }catch(error){
        // Handling Error
        dispatch(productsFailure(error.response.data.message))

    }
    
}