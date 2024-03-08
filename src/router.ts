import express from 'express';
import memberController from "./constrollers/member.controller";
const router = express.Router();


router.post('/login', memberController.login);

router.post('/signup', memberController.signUp);

export default router;
