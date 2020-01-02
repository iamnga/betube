import { Component, OnInit, ViewChild } from '@angular/core';
import { ListChairComponent } from '../list-chair/list-chair.component';


@Component({
  selector: 'app-edit-list-chair',
  templateUrl: './edit-list-chair.component.html',
  styleUrls: ['./edit-list-chair.component.css']
})
export class EditListChairComponent implements OnInit {
 @ViewChild (ListChairComponent,{static:true}) dsGheCom:ListChairComponent;
  constructor() { }
  themGheParent(...thamso:string[]){
    
    let gheDuocThem = {
      tenGhe: thamso[0],
      soGhe: thamso[1],
      gia: thamso[2],
      trangThai: null
    }
    if(thamso[3]==="false"){
      gheDuocThem.trangThai = false;
    }
    else if(thamso[3]) {
      gheDuocThem.trangThai = true;
    }
    this.dsGheCom.themGhe(gheDuocThem);
  }

  ngOnInit() {
  }

}
