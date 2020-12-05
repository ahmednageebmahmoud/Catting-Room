import { IMessage } from './i.message.interface';
export interface IGroup{
    id:number;
    name:string;
    resourcesKey:string;
    image:string;
    lastMessage?:string;
    messages?:IMessage[];
}//End Interface