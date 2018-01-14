import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _opened: boolean = false;
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
