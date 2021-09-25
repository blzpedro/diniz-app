import { Component, OnInit } from '@angular/core';
import { DialogColors } from 'src/app/models/dialog.interface';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsClass } from 'src/app/shared/utils';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private utils: UtilsClass, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
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
