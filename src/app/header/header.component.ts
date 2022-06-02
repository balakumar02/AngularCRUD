import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navtoggle:boolean  = true;
  constructor() { }

  ngOnInit(): void {
  }
  navToggle(){
    this.navtoggle=!this.navtoggle;
  }
}
