import {Request, Response} from 'express';
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"


const restaurantController: T = {}
restaurantController.goHome = (req:  Request, res: Response) => {
    try{
        console.log("goHome");
        res.send("Home page");
        // send | json | redirect | end | render
    }catch (err) {
        console.log("Error: goHome", err);
    }
};

restaurantController.getLogin = (req:  Request, res: Response) => {
    try{
        console.log("getLogin");
        res.send("Login page");
    }catch (err) {
        console.log("Error: login", err);
    }
};

restaurantController.getSignUp = (req:  Request, res: Response) => {
    try{
        console.log("getSignUp");
        res.send("SignUp page");
    }catch (err) {
        console.log("Error: signUp", err);
    }
};

restaurantController.processLogin = (req:  Request, res: Response) => {
    try{
        console.log("processLogin");
        res.end("login DONE");
    }catch (err) {
        console.log("Error: processLogin", err);
    }
};

restaurantController.processSignUp = (req:  Request, res: Response) => {
    try{
        console.log("processSignUp");
        res.end("signUp DONE");
    }catch (err) {
        console.log("Error: processSignUp", err);
    }
};

export default restaurantController;