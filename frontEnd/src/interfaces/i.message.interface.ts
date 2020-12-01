import { IUser } from './i.user.interface';
export interface IMessage{
    userInfo:IUser;
    message:string;
    isFromMe:boolean;

    groupId:number
}