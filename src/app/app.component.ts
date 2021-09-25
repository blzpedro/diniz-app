import { ChangeDetectorRef, Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { UtilsClass } from './shared/utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading$ = this.loader.loading

  constructor(public loader: LoaderService, private cdref: ChangeDetectorRef) {

  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
}
