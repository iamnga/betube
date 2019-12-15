import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AdminService } from "./../../../_core/service/admin.service";
import { UserInfo, UserLogin } from "../../../_core/model/master-model";
import { configs } from "../../../_core/config";
import * as $ from "jquery";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  isEqual = true; //biến check xem 2 password có giống nhau không
  userInfo = new UserInfo();
  userLogin = new UserLogin();
  error: string;
  signUpForm: any;
  listUser: any;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {
    this.createForm();
    this.adminService.getListUserPaginate(1).subscribe(
      res => {
        this.listUser = res;
      },
      error => {
        console.log(error.error);
      }
    );
  }

  //Hàm này dùng để truyền tổng số trang vào, sau đó chuyển nó thành mảng với số phần tử bằng với số trang để sử dụng được *ngFor
  counter(i: number) {
    return new Array(i);
  }

  createForm() {
    this.signUpForm = new FormGroup({
      fullName: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ]),
      userName: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ]),
      phoneNumber: new FormControl("", [
        Validators.required,
        Validators.pattern("^(09|03|08|07|05)[0-9]{8}") //Kiểm tra đây có phải số điện thoại của các nhà mạng Việt Nam không
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ]),
      passwordConfirm: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ]),
      email: new FormControl("", [Validators.required, Validators.email])
    });
  }

  signUp() {
    this.userInfo.hoTen = this.signUpForm.get("fullName").value;
    this.userInfo.taiKhoan = this.signUpForm.get("userName").value;
    this.userInfo.soDt = this.signUpForm.get("phoneNumber").value;
    this.userInfo.matKhau = this.signUpForm.get("password").value;
    this.userInfo.maNhom = configs.groupID;
    this.userInfo.maLoaiNguoiDung = configs.userType.admin;
    this.userInfo.email = this.signUpForm.get("email").value;
    let token = JSON.parse(localStorage.getItem("userAdmin"));
    this.adminService.postAddUser(this.userInfo, token.accessToken).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

  getPage(pageNumber: any){
    this.adminService.getListUserPaginate(pageNumber).subscribe(
      res => {
        this.listUser = res;
        console.log(this.listUser.currentPage)
        let activeClass =  $(".active");
        activeClass.removeClass("active");
        console.log($("#page-"+ pageNumber));
        $("#page-"+ pageNumber).addClass("active");      
      },
      error => {
        console.log(error.error);
      }
    );
  }

  setActive(pageNumber: any){
    console.log($("#page-"+ pageNumber));
    
  }

  next() {
    this.adminService.getListUserPaginate(this.listUser.currentPage + 1).subscribe(
      res => {
        this.listUser = res;
      },
      error => {
        console.log(error.error);
      }
    );
  }

  previous(){
    this.adminService.getListUserPaginate(this.listUser.currentPage - 1).subscribe(
      res => {
        this.listUser = res;
      },
      error => {
        console.log(error.error);
      }
    );
  }

  //So sánh xem password và password nhập lần 2 có giống nhau không
  comparePassword(value: string, isPasswordField = "true") {
    if (isPasswordField == "true") {
      if (value == this.signUpForm.get("passwordConfirm").value) {
        this.isEqual = true;
      } else {
        this.isEqual = false;
      }
    } else {
      if (value == this.signUpForm.get("password").value) {
        this.isEqual = true;
      } else {
        this.isEqual = false;
      }
    }
  }
}
