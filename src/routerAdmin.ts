import express from 'express';
import restaurantController from "./constrollers/restaurant.controller";
const routerAdmin = express.Router();


routerAdmin.get('/', restaurantController.goHome);

routerAdmin.get('/login', restaurantController.getLogin);

routerAdmin.get('/signup', restaurantController.getSignUp);

export default routerAdmin;
