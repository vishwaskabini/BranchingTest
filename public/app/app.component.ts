import { Component, NgZone, ViewContainerRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app/common/layout/app.component.html'
})

export class AppComponent {

  private _mode: string = 'over';
  private _opened: boolean = false;
  private _closeOnClickOutside: boolean = true;

  public constructor(private router: Router) {
  }

  private _toggleOpened() {
    if (!this.showMenu()) {
      this._opened = false;
    }
    else {
      this._opened = !this._opened;
    }
  }

  showMenu() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser === null || currentUser === '') {
      // this.router.navigateByUrl('Login');
    }
    else {
      if (localStorage.length > 0 && localStorage.getItem('currentUser') != '')
        return true;

      return false;
    }
  }
}