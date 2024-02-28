import express from 'express';
import memberController from "./constrollers/member.controller";
const router = express.Router();

// For REACT
// router.get('/', memberController.goHome);

// router.get('/login', memberController.getLogin);

// router.get('/signup', memberController.getSignUp);

export default router;
