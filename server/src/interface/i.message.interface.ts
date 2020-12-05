import { IUser } from './i.user.interface';
export interface IMessage{
    userInfo:IUser;
    message:string;
    groupId:number
}
