import express from 'express';
import restaurantController from "./constrollers/restaurant.controller";
import productController from './constrollers/product.controller';
const routerAdmin = express.Router();

/** Restaurant */
routerAdmin.get('/', restaurantController.goHome);

routerAdmin.get('/login', restaurantController.getLogin).post('/login', restaurantController.processLogin);

routerAdmin.get('/signup', restaurantController.getSignUp).post('/signup', restaurantController.processSignUp);

routerAdmin.get('/logout', restaurantController.logout);

routerAdmin.get('/check-me', restaurantController.checkAuthSession);

/** Product */

routerAdmin.get('/product/all', restaurantController.verifyRestaurant, productController.getAllProducts);
routerAdmin.post('/product/create', restaurantController.verifyRestaurant, productController.createNewProduct);
routerAdmin.post('/product/:id', restaurantController.verifyRestaurant,  productController.updateChosenProduct);

/** User */
export default routerAdmin;
