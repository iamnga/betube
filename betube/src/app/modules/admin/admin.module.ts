import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DataTablesModule } from 'angular-datatables';

const adminRoutes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [{ path: "user", component: UserComponent }]
  }
];

@NgModule({
  declarations: [AdminComponent, UserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule {}
