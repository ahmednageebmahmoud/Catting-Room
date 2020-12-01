import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let myOverHeader = req.clone({
            headers: req.headers.append("content-type", "application/json")
        });

     return   next.handle(myOverHeader);
    }
}