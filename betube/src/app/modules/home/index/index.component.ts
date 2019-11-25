import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../../_core/service/home.service";
import { Subscription } from "rxjs";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  private subService: Subscription;
  private listFilms: any[] = [];
  constructor(private _homeService: HomeService, config: NgbCarouselConfig, configRating: NgbRatingConfig) {
    configRating.max = 5;
    configRating.readonly = true;
  }

  ngOnInit() {
    let subService = this._homeService.getListFilms().subscribe(
      listFilms => {
        this.listFilms = listFilms;
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


}
