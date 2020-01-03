import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-chair',
  templateUrl: './list-chair.component.html',
  styleUrls: ['./list-chair.component.css']
})
export class ListChairComponent implements OnInit,OnChanges {
  @Input() dsGhe:  any[] = [];
  soGheDaChon:number = 0;
  soGheConLai:number = this.dsGhe.length;
   mangGheDaChon = [];
  
  datGheParent(thamso){
    if(thamso.Status){
      this.soGheDaChon--;
      this.soGheConLai++;
      this.mangGheDaChon.push(thamso.ghe);
    }
    else {
      this.soGheDaChon++;
      this.soGheConLai--;
      for(let index in this.mangGheDaChon){
        if(this.mangGheDaChon[index].soGhe == thamso.ghe.soGhe){
          this.mangGheDaChon.splice(parseInt(index),1);
        }
      }
    }

  }
  constructor() { }
  ngOnInit() {

  }
  ngOnChanges(changes:SimpleChanges){
     this.soGheConLai = this.dsGhe.length;
 }
}
