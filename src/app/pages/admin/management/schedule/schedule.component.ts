import { Component, OnInit, ViewChild } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatTable } from '@angular/material/table';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';
import { ScheduleList } from 'src/app/models/schedules.interface';
import { AdminService } from 'src/app/services/admin.service';
import { LoaderService } from 'src/app/services/loader.service';
import { mockScheduleList } from './mock-schedule-list';
import * as moment from 'moment';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  date = new Date();
  hour = '';
  scheduleList = []
  displayedColumns: string[] = ['date', 'hour', 'remove'];

  constructor(private dateAdapter: DateAdapter<Date>, private adminService: AdminService, private loader: LoaderService) { this.dateAdapter.setLocale('pt'); }

  ngOnInit(): void {
    this.getScheduleList(this.date)
  }

  @ViewChild(MatTable) table: MatTable<ScheduleList>;

  addSchedule() {
    const randomElementIndex = Math.floor(Math.random() * this.scheduleList.length);
    this.scheduleList.push(this.scheduleList[randomElementIndex]);
    this.table.renderRows();
  }

  removeSchedule(id: number) {
    this.scheduleList = this.scheduleList.filter(item => item.id !== id)
    this.table.renderRows();
  }

  async getScheduleList(date: Date) {
    this.loader.show()
    try {
      let dateFormatted = moment(date).format('DD/MM/YYYY').split('/').join('-');
      let res = await this.adminService.getSchedules(dateFormatted).pipe(first()).toPromise();
      this.scheduleList = res.data;
    } catch (error) {
      console.log(error)
    }
    this.loader.dismiss()
  }

  async createScheduleHour() {
    this.loader.show()
    try {
      let body = {
        hour: this.hour, date: moment(this.date).format('DD/MM/YYYY')
      }
      let res = await this.adminService.createScheduleHour(body).pipe(first()).toPromise();
      this.getScheduleList(this.date)
      this.hour = ''
    } catch (error) {
      console.log(error)
    }
    this.loader.dismiss()
  }

  async deleteSchedule(id: string) {
    this.loader.show()
    try {
      let body = {
        date: moment(this.date).format('DD/MM/YYYY'), id
      }
      let res = await this.adminService.deleteScheduleHour(body).pipe(first()).toPromise();
      this.getScheduleList(this.date)
      this.hour = ''
    } catch (error) {
      console.log(error)
    }
    this.loader.dismiss()
  }
}
