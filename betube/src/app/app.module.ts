

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { HomeModule } from "./modules/home/home/home.module";
import { HttpClientModule } from "@angular/common/http";
import { AccountModule } from "./modules/home/account/account.module";
import { AdminModule } from "./modules/admin/admin.module";
const appRoutes: Routes = [{ path: "", loadChildren: () => HomeModule }, 
{path: "account", loadChildren: () => AccountModule}, 
{path: "admin", loadChildren: () => AdminModule}];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 