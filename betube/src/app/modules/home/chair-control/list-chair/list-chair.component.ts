import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-chair',
  templateUrl: './list-chair.component.html',
  styleUrls: ['./list-chair.component.css']
})
export class ListChairComponent implements OnInit {
  danhSachGhe = [
    {SoGhe: 34, TenGhe:"số 34", Gia: 100, TrangThai: false},
    {SoGhe: 34, TenGhe:"số 34", Gia: 100, TrangThai: false},
    {SoGhe: 34, TenGhe:"số 34", Gia: 100, TrangThai: false},
    {SoGhe: 34, TenGhe:"số 34", Gia: 100, TrangThai: false}
  ];
  soGheDaDat: number = 0;
  soGheConLai: number;
  danhSachGheDangDat = [];

  constructor() { }

  ngOnInit() {
    for (let ghe of this.danhSachGhe)
    {
      if(!ghe.TrangThai){
        this.soGheConLai++;
      }
    };

  }
  datGheParent(status, ghe){
    if(status){
      this.soGheDaDat++;
      this.soGheConLai--;
      this.danhSachGheDangDat.push(ghe);
    }
    else {
      this.soGheDaDat--;
      this.soGheConLai++;
      for(let index in this.danhSachGheDangDat){
        if(this.danhSachGheDangDat[index].soGhe === ghe.soGhe){
          this.danhSachGheDangDat.slice(parseInt(index),1)
        }
      }
    }

  }
  themGhe(gheDuocThem){
    this.danhSachGhe.push(gheDuocThem);
  }

}
