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


}//End Class