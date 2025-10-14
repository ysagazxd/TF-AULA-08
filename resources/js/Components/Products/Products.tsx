import { useEffect, useState, FormEvent } from "react";
import type { ListApi, ProductModel } from "../../app.types";
import productListApi from "../../api/productListApi";
import ProductCreateForm from "./ProductCreateForm";

export default function ProductsTwoCols() {
    const [data, setData] = useState<ListApi<ProductModel> | "error">();

    useEffect(() => {
        (async () => {
            const resp = await productListApi();
            if ("error" in resp) return setData("error");
            setData(resp);
        })();
    }, []);

    const formatPrice = (ptt: number) =>
        (ptt / 1000).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    const formatDate = (d: Date) =>
        new Date(d).toLocaleDateString("pt-BR", { year: "numeric", month: "2-digit", day: "2-digit" });


    if (!data) {
        return (
            <div className="alert alert-light border d-flex align-items-center gap-2">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Carregando produtos...
            </div>
        );
    }

    if (data === "error") {
        return <div className="alert alert-warning">Erro na API.</div>;
    }

    return (
        <div className="row g-4">
            <ProductCreateForm />

            <div className="col-12 col-lg-8">
                {data.rows.length === 0 ? (
                    <div className="alert alert-warning">Nenhum produto encontrado.</div>
                ) : (
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {data.rows.map((p) => (
                            <div key={p.id} className="col">
                                <div className="card h-100 border-0 shadow-sm rounded-4">
                                    <div className="card-body d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <h6 className="card-title mb-0 fw-semibold">{p.name}</h6>
                                            <span className="badge text-bg-light border">
                                                {formatPrice(p.price_times_thousand)}
                                            </span>
                                        </div>

                                        <p className="card-text text-muted small mt-2 mb-0">
                                            <i className="fa-regular fa-clock me-1" aria-hidden="true"></i>
                                            Cadastrado em {formatDate(p.created_at)}
                                        </p>
                                    </div>

                                    <div className="card-footer bg-white border-0 pt-0">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="badge rounded-pill text-bg-primary">#{p.id}</span>
                                            <button type="button" className="btn btn-sm btn-outline-primary">
                                                Ver detalhes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
