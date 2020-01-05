import { HomeService } from "./../../../_core/service/home.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.css"]
})
export class TicketComponent implements OnInit {
  showTimeID: string;
  listChair: any;
  listNormalChair: any;
  listVIPChair: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private _homeService: HomeService
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(
      result => {
        this.showTimeID = result.showTimeID;
        this._homeService.getListTicketRoom(this.showTimeID).subscribe(res => {
          this.listChair = res.danhSachGhe;
          this.listNormalChair = this.listChair.filter(
            x => x.loaiGhe == "Thuong"
          );
          this.listVIPChair = this.listChair.filter(
            x => x.loaiGhe == "Vip"
          );
        });
      },
      error => {
        console.log(error);
      }
    );
  }
}
