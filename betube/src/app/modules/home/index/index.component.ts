import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../../_core/service/home.service";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import * as $ from "jquery";
//import được là nhờ install thư viện @types/slick-carousel, tham khảo tại https://hackernoon.com/how-to-use-javascript-libraries-in-angular-2-apps-ff274ba601af
import "slick-carousel";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {

  // List Data
listFilms: any[] = [];
listSystemTheaters: any[] = [];
listTheaters: any[] = [];
listFilmsOfTheater: any;

systemTheaterID: string;
theaterID: string;

  constructor(
    private _homeService: HomeService,
    config: NgbCarouselConfig,
    configRating: NgbRatingConfig
  ) {
    configRating.max = 5;
    configRating.readonly = true;
  }

  ngOnInit() {
    this._homeService.getListFilms().subscribe(
      listFilms => {
        this.listFilms = listFilms;
      },
      error => {
        console.log(error.error);
      }
    );

    this._homeService.getListSystemTheaters().subscribe(
      listSystemTheaters => {
        this.listSystemTheaters = listSystemTheaters;
      },
      error => {
        console.log(error.error);
      }
    );
  }


  showTheaters(systemTheaterID: string){
    this.systemTheaterID = systemTheaterID;
    this._homeService.getListTheaters(systemTheaterID).subscribe(
      listTheaters => {
        this.listTheaters = listTheaters;
      },
      error => {
        console.log(error.error);
      }
    );
  }

  showFilmsOfTheater(theaterID: string){
    this.theaterID = theaterID;
    this._homeService.getListTheatersShowtimes(this.systemTheaterID).subscribe(
      listFilmsOfTheater => {
        let listTheaters: any[] = listFilmsOfTheater[0].lstCumRap;
        this.listFilmsOfTheater = listTheaters.find(x => x.maCumRap == theaterID).danhSachPhim;
        console.log(listFilmsOfTheater);
        console.log(this.listFilmsOfTheater);
        console.log(listTheaters);
      },
      error => {
        console.log(error.error);
      }
    );
  }

  images = [
    "../../../../assets/home/images/banner/FrozenII.jpg",
    "../../../../assets/home/images/banner/Joker.jpg",
    "../../../../assets/home/images/banner/Endgame.jpg"
  ];

  slideConfig = { slidesToShow: 5, slidesToScroll: 5 };

  elementIdList = {
    upComing: "upComing"
  };

  //Resize lại carousel do hiển thị lại sau khi ẩn thì width của carousel = 0px
  resize() {
    $("#pills-profile").css("display", "none");
    $("#upComing").slick("refresh");
    $("#pills-profile").css("display", "block");
  }
}
