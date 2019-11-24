import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../../_core/service/home.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  private subService: Subscription;
  private listFilms: any[] = [];
  constructor(private _homeService: HomeService) {}

  ngOnInit() {
    let subService = this._homeService.getListFilms().subscribe(
      listFilms => {
        this.listFilms = listFilms;
        console.log(listFilms);
      },
      error => {
        console.log(error.error);
      }
    );
  }
}
