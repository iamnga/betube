import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "../index/index.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const homeRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [{ path: "", component: IndexComponent }]
  }
];

@NgModule({
  declarations: [HomeComponent, IndexComponent],
  imports: [CommonModule, NgbModule, RouterModule.forChild(homeRoutes)],
  providers: []
})
export class HomeModule {}
