import { HomeService } from './../../../_core/service/home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserInfo, UserLogin } from "../../../_core/model/master-model";
import { first } from 'rxjs/operators';
import * as $ from "jquery";
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user : any;
  constructor(private homeService: HomeService, private router: Router) {
    
   }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user)
  }
}
