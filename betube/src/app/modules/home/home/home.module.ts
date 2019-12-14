import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "../index/index.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel'; //Để các component con có thể sử dụng được thư viện cần phải import thư việc vào module trước 
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactComponent } from '../contact/contact.component';
const homeRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [{ path: "", component: IndexComponent }, 
    { path: "about-us", component: AboutUsComponent }, 
    { path: "contact", component: ContactComponent }]
  }
];

@NgModule({
  declarations: [HomeComponent, IndexComponent, AboutUsComponent, ContactComponent],
  imports: [CommonModule, NgbModule, SlickCarouselModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(homeRoutes)],
  providers: []
})
export class HomeModule {}
