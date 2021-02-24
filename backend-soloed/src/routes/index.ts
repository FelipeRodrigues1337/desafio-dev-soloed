import { Router } from 'express';
import itensRouter from './products.routes';

const routes = Router();

routes.use('/products', itensRouter);

export default routes;