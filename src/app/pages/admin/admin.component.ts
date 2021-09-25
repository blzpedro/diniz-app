import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DialogColors } from 'src/app/models/dialog.interface';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsClass } from 'src/app/shared/utils';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') drawer: MatDrawer;

  constructor(private utils: UtilsClass, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.drawer.toggle()
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
