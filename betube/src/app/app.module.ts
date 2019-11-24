import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { HomeModule } from "./modules/home/home/home.module";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [{ path: "", loadChildren: () => HomeModule }];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
