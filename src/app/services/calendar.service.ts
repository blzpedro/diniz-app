import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpService) { }

  getDays(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/teste`);
  }
}
