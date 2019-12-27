import { HomeService } from './../../../_core/service/home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public maPhim: string;
  public detailPhim: any;
  constructor(private actived:ActivatedRoute, private _homeService:HomeService) { }

  ngOnInit() {
    this.actived.params.subscribe(
      (result) =>{
        this.maPhim = result.maphim;
        this._homeService.getInfoFilm(this.maPhim).subscribe(
          (detailFilm) =>{
            this.detailPhim = detailFilm;
            console.log(detailFilm);
          }
        )
      }
    )

  }

}
