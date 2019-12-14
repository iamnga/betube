import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $("body").css("background-color", "white");
  }

  logo = "assets/home/images/Logo.png";
}
