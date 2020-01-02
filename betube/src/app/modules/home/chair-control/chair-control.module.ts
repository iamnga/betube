import { ListChairComponent } from './list-chair/list-chair.component';
import { EditListChairComponent } from './edit-list-chair/edit-list-chair.component';
import { ChairComponent } from './chair/chair.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ListChairComponent, EditListChairComponent, ChairComponent],
  exports: [ListChairComponent, EditListChairComponent, ChairComponent],
  imports: [
    CommonModule
  ]
})
export class ChairControlModule { }
