import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { AccountComponent } from "./account.component";
import { Routes, RouterModule } from "@angular/router";
import { SignUpComponent } from './sign-up/sign-up.component';

const accRoutes: Routes = [
  {
    path: "",
    component: AccountComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "sign-up",
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  declarations: [LoginComponent, AccountComponent, SignUpComponent],
  imports: [CommonModule, RouterModule.forChild(accRoutes)]
})
export class AccountModule {}
