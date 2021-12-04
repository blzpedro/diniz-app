import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpService) { }

  getSchedules(date: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/getSchedulesByDate?date=${date}`);
  }

  createScheduleHour(body: { date: string, hour: string }): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/createScheduleHour`, body);
  }

  deleteScheduleHour({ date, id }): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/deleteScheduleHour?date=${date}&id=${id}`,);
  }
}
