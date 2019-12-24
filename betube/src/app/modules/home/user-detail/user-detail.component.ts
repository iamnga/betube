import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user : any;
  constructor() { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user)
  }

}
