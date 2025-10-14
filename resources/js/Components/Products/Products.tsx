import { useEffect, useState } from "react";
import type { ListApi, ProductModel } from "../../app.types";
import productListApi from "../../api/productListApi";

export default function Products() {
    const [data, setData] = useState<ListApi<ProductModel> | "error">();

    useEffect(() => {
        (async () => {
            const data = await productListApi();

            if ("error" in data) {
                setData("error");
                return;
            }

            setData(data);
        })();

    }, []);

    const formatPrice = (ptt: number) =>
        (ptt / 1000).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    if (!data) {
        return (
            <div className="alert alert-light border d-flex align-items-center gap-2">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Carregando produtos...
            </div>
        );
    }

    if (data === "error") {
        return <div className="alert alert-warning">Erro na api.</div>;
    }

    if (data.rows.length === 0) {
        return <div className="alert alert-warning">Nenhum produto encontrado.</div>;
    }

    return (
        <ul className="list-group rounded-4 overflow-hidden">
            {data.rows.map((p) => (
                <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                        <span className="badge rounded-pill text-bg-primary">{p.id}</span>
                        <span className="fw-semibold">{p.name}</span>
                    </div>
                    <span className="badge text-bg-light border">{formatPrice(p.price_times_thousand)}</span>
                </li>
            ))}
        </ul>
    );
}
