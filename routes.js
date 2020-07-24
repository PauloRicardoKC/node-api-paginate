import { Router } from 'express';
import BrandController from './src/controllers/BrandController';
import CarController from './src/controllers/CarController';

const routes = new Router();

//Brands
routes.get('/brands', BrandController.index)
routes.get('/brands/:id', BrandController.show)
routes.post('/brands', BrandController.store)
routes.put('/brands/:id', BrandController.update)
routes.delete('/brands/:id', BrandController.destroy)

//Cars
routes.get('/cars', CarController.index)
routes.get('/cars/:id', CarController.show)
routes.post('/cars', CarController.store)
routes.put('/cars/:id', CarController.update)
routes.delete('/cars/:id', CarController.destroy)

export default routes;