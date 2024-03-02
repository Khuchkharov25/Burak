import {Request, Response} from 'express';
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"
import { MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';


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
        res.send("login DONE");
    }catch (err) {
        console.log("Error: processLogin", err);
    }
};

restaurantController.processSignUp = async (req:  Request, res: Response) => {
    try{
        console.log("processSignUp");

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService ();
        const result = await memberService.processSignUp(newMember);

        res.send(result);
    }catch (err) {
        console.log("Error: processSignUp", err);
        res.send(err);
    }
};

export default restaurantController;