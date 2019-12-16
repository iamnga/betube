import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AdminService } from "./../../../_core/service/admin.service";
import { UserInfo, UserLogin } from "../../../_core/model/master-model";
import { configs } from "../../../_core/config";
import * as $ from "jquery";

@Component({
  selector: "app-film",
  templateUrl: "./film.component.html",
  styleUrls: ["./film.component.css"]
})
export class FilmComponent implements OnInit {
  listFilm: any;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {
    this.getListFilmPaginate(1);
  }

  getListFilmPaginate(pageNumber: any) {
    this.adminService.getListFilmPaginate(pageNumber).subscribe(
      res => {
        this.listFilm = res;
      },
      error => {
        console.log(error.error);
      }
    );
  }

  getPage(pageNumber: any) {
    this.getListFilmPaginate(pageNumber);
  }

  //Hàm này dùng để truyền tổng số trang vào, sau đó chuyển nó thành mảng với số phần tử bằng với số trang để sử dụng được *ngFor
  counter(i: number) {
    return new Array(i);
  }
}
