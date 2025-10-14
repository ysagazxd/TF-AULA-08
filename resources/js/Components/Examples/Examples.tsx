import { useState } from "react";
import "./styles.css";

export default function Examples() {
    const [contador, setContador] = useState(0);

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const onlyNumber = target.value.replace(/[^\d]/g, ""); // mantém só números
        setContador(Number(onlyNumber || "0"));
    };

    const addClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setContador((prev) => {
            return ++prev;
        })
    }

    const subClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setContador((prev) => {
            if (prev === 0) {
                return prev
            }
            return --prev;
        })
    }

    return (
        <div className="container d-flex justify-content-center my-4">
            <div className="d-flex align-items-center gap-3">
                <button
                    className="btn btn-outline-danger btn-lg px-4"
                    onClick={subClickHandler}
                >
                    −
                </button>

                <input
                    type="text"
                    className="form-control form-control-lg text-center"
                    value={String(contador)}
                    onChange={inputChangeHandler}
                />

                <button
                    className="btn btn-primary btn-lg px-4"
                    onClick={addClickHandler}>
                    +
                </button>
            </div>
        </div>
    );
}
