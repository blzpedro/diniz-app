import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpService extends HttpClient {

    constructor(private httpHandler: HttpHandler) {
        super(httpHandler);
    }

    public delete<T>(url: string, options?: any): Observable<T> {
        return this.req<T>(() => super.delete<T>(url, options));
    }

    public get<T>(url: string, options?: any): Observable<T> {
        return this.req<T>(() => super.get<T>(url, options));
    }

    public post<T>(url: string, body: any, options?: any): Observable<T> {
        return this.req<T>(() => super.post<T>(url, body, options));
    }

    public put<T>(url: string, body: any, options?: any): Observable<T> {
        return this.req<T>(() => super.put<T>(url, body, options));
    }

    private req<T>(fn: Function): Observable<T> {

        return fn();

    }

}
