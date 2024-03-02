import { Member, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import MemberModel from "../scheme/Member.model";
import Errors, { HttpCode, Message } from "../libs/Errors";

class MemberService {
    private readonly memberModel;
    constructor(){
        this.memberModel = MemberModel
    }
    

    public async processSignUp(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel.findOne({memberType: MemberType.RESTAURANT}).exec();
        console.log("exist:", exist);
        if(exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        try{
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result;
    }catch{
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
        }
}
export default MemberService;