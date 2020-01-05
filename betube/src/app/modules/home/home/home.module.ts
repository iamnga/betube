import { ChairComponent } from './../chair/chair.component';
import { ListChairComponent } from './../list-chair/list-chair.component';
import { TicketComponent } from './../ticket/ticket.component';
import { PipeModule } from './../../../_core/pipe/pipe.module';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { DetailComponent } from '../detail/detail.component';
import { UtilityComponent } from '../utility/utility.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "../index/index.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel'; //Để các component con có thể sử dụng được thư viện cần phải import thư viện vào module trước 
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
    { path: "contact", component: ContactComponent },
    { path: "utility", component: UtilityComponent},
    { path: "detail/:maphim", component: DetailComponent},
    { path: "ticket/:malichchieu", component: TicketComponent},
    { path: "user-detail/:taiKhoan", component: UserDetailComponent}]
  }
];

@NgModule({
  declarations: [HomeComponent, IndexComponent, AboutUsComponent, ContactComponent, UtilityComponent, DetailComponent, UserDetailComponent, TicketComponent,ListChairComponent,ChairComponent],
  imports: [CommonModule, PipeModule, NgbModule, SlickCarouselModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(homeRoutes)],
  providers: []
})
export class HomeModule {}
