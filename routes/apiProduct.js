import { Router } from 'express';
import ListProductController from '../app/Http/Controllers/Product/Api/ListProductController.js';
import CreateProductController from '../app/Http/Controllers/Product/Api/CreateProductController.js';
import DeleteProductController from '../app/Http/Controllers/Product/Api/DeleteProductController.js';

export const apiProduct = (function () {

    const router = Router();

    // GET Listar
    router.get('/', ListProductController);

    router.post('/', CreateProductController);

    router.delete('/:id', DeleteProductController);


    return router;

})();