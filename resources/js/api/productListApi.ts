import axios from "axios";
import catchError from "../services/catchError";
import { ListApi, LoginApi, ProductModel } from "../app.types";

export default async function productListApi() {
    try {


        const { data } = await axios.get<ListApi<ProductModel>>(`http://localhost:8080/api/products`);

        return data;

    } catch (error) {
        return catchError(error);
    }
}
