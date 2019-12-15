import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  logo = "assets/home/images/Logo.png";

  constructor(private router: Router) {}

  ngOnInit() {
    $("body").css("background-color", "white");
  }

  signOutAdmin() {
    // localStorage.removeItem("userAdmin");
    this.router.navigate['/admin/user'];
  }
}
