import { Component, OnInit, ViewChild } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatTable } from '@angular/material/table';
import { ScheduleList } from 'src/app/models/schedules.interface';
import { mockScheduleList } from './mock-schedule-list';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  today = new Date();
  scheduleList = mockScheduleList
  displayedColumns: string[] = ['remove', 'date', 'hour'];

  constructor(private dateAdapter: DateAdapter<Date>) { this.dateAdapter.setLocale('pt'); }

  ngOnInit(): void {
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

}
