import {ObjectId} from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";
import {Request} from "express";
import { Session } from "express-session";

export interface Member {
    _id: ObjectId;
    memberType: MemberType;
    memberStatus: MemberStatus; 
    memberNick: String;
    memberPhone: String;
    memberPassword?: String;
    memberAdress?: String;
    memberDesc?: String;
    memberImage?: String;
    memberPoints: number;
    createdAt: Date;
    updatedAt: Date;
 }

export interface MemberInput {
   memberType?: MemberType;
   memberStatus?: MemberStatus; 
   memberNick: String;
   memberPhone: String;
   memberPassword: string;
   memberAdress?: String;
   memberDesc?: String;
   memberImage?: String;
   memberPoints?: number;
}

export interface LoginInput {
    memberNick: String;
    memberPassword: string;
}

export interface AdminRequest extends Request {
    member: Member;
    session: Session & {member: Member};
    file: Express.Multer.File;
    files: Express.Multer.File[];
}