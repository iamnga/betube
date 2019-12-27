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
  public detailFilm: any;
  public TrailerChiTiet: string;
  constructor(private actived:ActivatedRoute, private _homeService:HomeService) { }

  ngOnInit() {
    this.actived.params.subscribe(
      (result) =>{
        this.maPhim = result.maphim;
        this._homeService.getInfoFilm(this.maPhim).subscribe(
          (DetailFilm) =>{
            this.detailFilm = DetailFilm;
            console.log(DetailFilm);
            let Trailer = this.detailFilm.trailer;
            console.log(Trailer);
            this.TrailerChiTiet = Trailer;
            console.log(this.TrailerChiTiet);
          }
        )
      }
    )

  }

}
