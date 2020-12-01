import { IMessage } from './../../interfaces/i.message.interface';
import { IGroup } from './../../interfaces/i.group';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    /**
     * Get Groups
     */
    getGroups<T>():Observable<T> {
        return this.http.get(`${environment.apiUrl}api/groups/getGroups`)  as Observable<T> ;
    }

    /**Send Message */
    sendMessage<T>(message:IMessage):Observable<T> {
        return this.http.post(`${environment.apiUrl}api/messages/send`,JSON.stringify(message))  as Observable<T> ;
    }

}//End Class