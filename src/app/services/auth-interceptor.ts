import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authHeader = localStorage.getItem("accessToken");
    req = req.clone({
      setHeaders: {
        Authorization: authHeader,
        ContentType: 'application/json'
      },
    });

    return next.handle(req);
  }
}
