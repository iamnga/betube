import { HomeService } from './../../../../_core/service/home.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Form login
  loginForm = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl("")
  });

  constructor(private homeService:HomeService, private router:Router){}

  ngOnInit() {
  }

  signIn(){
    let userName = this.loginForm.controls.userName.value;
    let password = this.loginForm.controls.password.value;
    this.homeService.signIn(userName, password).subscribe((res) => {
          console.log(res);
    });
   
  }
  logo = "assets/home/images/Logo.png";
}
