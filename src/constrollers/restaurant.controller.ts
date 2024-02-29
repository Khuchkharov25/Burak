import {Request, Response} from 'express';
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"

const restaurantController: T = {}
restaurantController.goHome = (req:  Request, res: Response) => {
    try{
        res.send("Home page");
    }catch (err) {
        console.log("Error: goHome", err);
    }
};

restaurantController.getLogin = (req:  Request, res: Response) => {
    try{
        res.send("Login page");
    }catch (err) {
        console.log("Error: login", err);
    }
};

restaurantController.getSignUp = (req:  Request, res: Response) => {
    try{
        res.send("SignUp page");
    }catch (err) {
        console.log("Error: signUp", err);
    }
};

export default restaurantController;