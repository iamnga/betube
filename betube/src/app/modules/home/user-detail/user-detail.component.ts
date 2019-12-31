import { HomeService } from './../../../_core/service/home.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserInfo, UserLogin } from "../../../_core/model/master-model";
import { first } from 'rxjs/operators';
import * as $ from "jquery";
import { configs } from "./../../../_core/config";
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public userName: string;
  public userInfo: any;
  public user: any;
  constructor(private _homeService: HomeService, private actived2: ActivatedRoute) {
    
   }

  ngOnInit() {
    // this.actived2.params.subscribe(
    //   (result)=>{
    //     this.userName = result.taiKhoan;
    //     console.log(result);
    //     this._homeService.postCustomerInfo(this.userName).subscribe(
    //       (thongtin)=>{
    //         this.userInfo = thongtin;
    //         console.log(userInfo);
    //       }
    //     );
    //   }
    // );
    $("body").css({"background-color": "#e9ebee"});
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user)
    
  }
}
