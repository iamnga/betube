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
  public trailerFilm: string;
  constructor(private actived:ActivatedRoute, private _homeService:HomeService) { }

  ngOnInit() {
    this.actived.params.subscribe(
      (result) =>{
        this.maPhim = result.maphim;
        this._homeService.getInfoFilm(this.maPhim).subscribe(
          (DetailFilm) =>{
            this.detailFilm = DetailFilm;
            console.log(DetailFilm);
            let trailer = this.detailFilm.Trailer;
            console.log(trailer);
            trailer = trailer.split('watch?v=');
            console.log(trailer);
            this.trailerFilm = trailer[0]+"embed/"+trailer[1];
            console.log(trailer);
          }
        )
      }
    )

  }

}
