import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AdminService } from "./../../../_core/service/admin.service";
import { Film } from "../../../_core/model/master-model";
import { configs } from "../../../_core/config";
import * as $ from "jquery";

@Component({
  selector: "app-film",
  templateUrl: "./film.component.html",
  styleUrls: ["./film.component.css"]
})
export class FilmComponent implements OnInit {
  listFilm: any;
  film = new Film();
  addFilmForm: any;
  formTitle: string;
  isEdit = false;
  error: string;
  filmIdDelete: string;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {
    this.createForm();
    this.getListFilmPaginate(1);
  }

  createForm() {
    this.addFilmForm = new FormGroup({
      filmID: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ]),
      filmName: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]),
      slugFilm: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]),
      trailer: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]),
      imgFilm: new FormControl(""),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(500)
      ]),
      premiereDate: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]),
      rate: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2)
      ])
    });
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

  next() {
    this.getListFilmPaginate(this.listFilm.currentPage + 1);
  }

  previous() {
    this.getListFilmPaginate(this.listFilm.currentPage - 1);
  }

  setUpAddFilm() {
    this.addFilmForm.reset();
    this.formTitle = "Thêm phim mới";
    this.isEdit = false;
  }

  addFilm() {
    console.log(this.addFilmForm);
    this.film.maPhim = this.addFilmForm.get("filmID").value;
    this.film.tenPhim = this.addFilmForm.get("filmName").value;
    this.film.biDanh = this.addFilmForm.get("slugFilm").value;
    this.film.trailer = this.addFilmForm.get("trailer").value;
    this.film.hinhAnh = this.film.tenPhim + ".jpg";
    this.film.moTa = this.addFilmForm.get("description").value;
    this.film.ngayKhoiChieu = this.addFilmForm.get("premiereDate").value;
    this.film.danhGia = this.addFilmForm.get("rate").value;
    this.film.maNhom = configs.groupID;
    console.log(this.film);
    let token = JSON.parse(localStorage.getItem("userAdmin"));
    this.adminService.postAddFilm(this.film, token.accessToken).subscribe(
      res => {
        console.log(res);
        let frmData = new FormData();
        frmData.append(
          "File",
          this.addFilmForm.get("imgFilm").value,
          this.film.tenPhim + "gr10.jpg"
        );
        frmData.append("tenphim", this.film.tenPhim);
        this.adminService
          .postUploadImgFilm(frmData, token.accessToken)
          .subscribe(
            res => {
              console.log(res);
              this.getListFilmPaginate(this.listFilm.currentPage);
              $(".close").click();
              $("#showAlertAddSuccess").click();
            },
            error => {
              console.log(error);
              this.error = error.error;
            }
          );
      },
      error => {
        this.error = error.error;
      }
    );
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      console.log(event);
      const file = event.target.files[0];
      this.addFilmForm.get("imgFilm").setValue(file);
    }
  }

  setFilmDelete(filmID: string) {
    this.filmIdDelete = filmID;
  }

  deleteFilm() {
    let token = JSON.parse(localStorage.getItem("userAdmin"));
    this.adminService
      .deleteFilm(this.filmIdDelete, token.accessToken)
      .subscribe(
        res => {
          // if (this.inputSearchUser != "") {
          //   this.searchUser();
          // } else {
            this.getListFilmPaginate(this.listFilm.currentPage);
          // }
          $("#showAlertDeleteSuccess").click();
        },
        error => {
          console.log(error.error);
        }
      );
  }
}
