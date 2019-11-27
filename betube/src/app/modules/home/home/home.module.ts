import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "../index/index.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel'; //Để các component con có thể sử dụng được thư viện cần phải import thư việc vào module trước 

const homeRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [{ path: "", component: IndexComponent }]
  }
];

@NgModule({
  declarations: [HomeComponent, IndexComponent],
  imports: [CommonModule, NgbModule, SlickCarouselModule, RouterModule.forChild(homeRoutes)],
  providers: []
})
export class HomeModule {}
