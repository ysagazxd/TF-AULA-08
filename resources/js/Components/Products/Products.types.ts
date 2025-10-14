import { ProductModel } from "../../app.types";

export type ProductCreateFormProps = {
    onCreate?: (product: ProductModel) => void;
}