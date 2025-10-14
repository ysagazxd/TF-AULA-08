import axios from "axios";
import catchError from "../services/catchError";
import { LoginApi } from "../app.types";

export default async function loginApi(email: string, password: string) {
    try {
        const body = new URLSearchParams({
            email: email,
            password: password
        });

        const { data } = await axios.post<LoginApi>(`http://localhost:8080/login`, body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });

        return data;

    } catch (error) {
        return catchError(error);
    }
}
