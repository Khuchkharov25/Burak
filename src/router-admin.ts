import express from 'express';
import restaurantController from "./constrollers/restaurant.controller";
const routerAdmin = express.Router();

/** Restaurant */
routerAdmin.get('/', restaurantController.goHome);

routerAdmin.get('/login', restaurantController.getLogin).post('/login', restaurantController.processLogin);

routerAdmin.get('/signup', restaurantController.getSignUp).post('/signup', restaurantController.processSignUp);

/** Product */

/** User */
export default routerAdmin;
