import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }
  
  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }
}
