import axios from "axios";
import { productsFailure, productsRequest, productsSuccess } from "../slices/productsSlices";

export const getProducts = async (dispatch)=>{
    try{
        dispatch(productsRequest())
        const {data} = await axios.get('api/v1/products')
        dispatch(productsSuccess(data))

    }catch(error){
        dispatch(productsFailure(error.response.data.message))

    }
    
}