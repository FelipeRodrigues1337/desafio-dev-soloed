import { Router } from 'express';
import ProductsRepository from '../repository/ItensRepository';

const productsRepository = new ProductsRepository();

const productsRouter = Router();

productsRouter.get('/', (request, response) => {
    const productsList = productsRepository.get()
    return response.json(productsList);
})

export default productsRouter;