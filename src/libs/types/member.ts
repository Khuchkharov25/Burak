import {ObjectId} from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";

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
   memberPassword: String;
   memberAdress?: String;
   memberDesc?: String;
   memberImage?: String;
   memberPoints?: number;
}