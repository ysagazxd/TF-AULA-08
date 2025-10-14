import { useEffect, useState } from "react";
import { ListApi, UserModel } from "../../app.types"
import axios from "axios";

export default function Users() {

    const [data, setData] = useState<ListApi<UserModel>>();

    useEffect(() => {
        (async () => {
            const { data } = await axios.get<ListApi<UserModel>>("http://localhost:8080/api/users");

            setData(data);
        })();
    }, []);

    return (
        <ul>
            {data && data.rows.map((userModel) => {
                return (
                    <li>{userModel.name}</li>
                )
            })}
        </ul>
    )
}