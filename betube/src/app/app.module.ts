

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { HomeModule } from "./modules/home/home/home.module";
import { HttpClientModule } from "@angular/common/http";
import { AccountModule } from "./modules/home/account/account.module";
import { AdminModule } from "./modules/admin/admin.module";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ChairControlComponent } from './modules/home/chair-control/chair-control.component';
import { ChairComponent } from './modules/home/chair-control/chair/chair.component';
import { ListChairComponent } from './modules/home/chair-control/list-chair/list-chair.component';
import { EditListChairComponent } from './modules/home/chair-control/edit-list-chair/edit-list-chair.component';




const appRoutes: Routes = [{ path: "", loadChildren: () => HomeModule }, 
{path: "account", loadChildren: () => AccountModule}, 
{path: "admin", loadChildren: () => AdminModule}];

@NgModule({
  declarations: [AppComponent, ChairControlComponent, ChairComponent, ListChairComponent, EditListChairComponent],
  imports: [BrowserModule, HttpClientModule,SweetAlert2Module.forRoot(), RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 