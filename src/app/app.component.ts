import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'diniz-app';

  ngOnInit() {
    this.showIosInstallBanner()
  }

  async showIosInstallBanner() {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      console.log(userAgent)
      return /iphone|ipad|ipod/.test(userAgent);
    };

    if (isIos()) {
      alert('ta no iOS, update')
    } else {
      alert('não ta no iOS, update')
    }
  }
}
