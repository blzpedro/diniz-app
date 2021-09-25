import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { DialogColors } from 'src/app/models/dialog.interface';
import { CalendarService } from 'src/app/services/calendar.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsClass } from 'src/app/shared/utils';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router, private utils: UtilsClass, private calendarService: CalendarService) { }

  ngOnInit() {
    // this.getDays()
  }

  async getDays(): Promise<any> {
    let user = localStorage.getItem('user');
    let res = await this.calendarService.getDays(user).pipe(take(1)).toPromise()
  }

  openDialogLogout() {
    this.utils.openDialog('Deseja sair?', '', 'sm', [
      {
        text: 'Sim',
        fn: () => this.logout(),
        color: DialogColors.PRIMARY
      },
      {
        text: 'Não',
        fn: () => null,
        color: DialogColors.WARN
      },
    ])
  }

  logout() {
    this.firebaseService.logout()
  }


}
