import { Router } from 'express';
import ListProductController from '../app/Http/Controllers/Product/Api/ListProductController.js';
import CreateProductController from '../app/Http/Controllers/Product/Api/CreateProductController.js';

export const apiProduct = (function () {

    const router = Router();

    // GET Listar
    router.get('/', ListProductController);

    router.post('/', CreateProductController)

    return router;

})();