import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: any

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
      this.title = 'eh iOS'
    } else {
      this.title = 'não eh iOS'
    }
  }
}
