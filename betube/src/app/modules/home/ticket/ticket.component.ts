import { HomeService } from './../../../_core/service/home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  public maLichChieu:string;
  public danhSachGheNgoi:any[] = [];
  constructor(private activeRoute:ActivatedRoute,  private _homeService:HomeService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (result) =>{
        // this.maLichChieu = result.maLichChieu;
        this.maLichChieu = result.malichchieu;
        this._homeService.getListTicketRoom(this.maLichChieu).subscribe(
          (kq)=>{
            this.danhSachGheNgoi = kq.danhSachGhe;
            console.log(this.danhSachGheNgoi);
          }
        )
      }, (error) =>{
        console.log(error);
        
      }
    )
     
    
  }

}
