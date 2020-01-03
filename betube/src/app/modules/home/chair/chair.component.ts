import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {
  status:boolean = false;
  @Input() itemGhe: any;
  @Output() emitStatus = new EventEmitter();
  constructor() { }
  datGhe(){
    if(this.status){
      this.status = false;
    } else {
      this.status = true;
    }
    this.emitStatus.emit(this.status);
  }

  ngOnInit() {
  }

}
