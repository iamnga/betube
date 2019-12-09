import { HomeService } from './../../../../_core/service/home.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { settings } from 'src/app/_core/settings/settings';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subService:Subscription;
  constructor(private HomeService:HomeService, private router:Router){}

  ngOnInit() {
    settings.hiddenLoading();
  }
  signIn(userLogin:any){
    this.subService = this.HomeService.signIn(userLogin).subscribe((result:any) => {
      localStorage.setItem(settings.userLogin,JSON.stringify(result));
      localStorage.setItem(settings.accessToken,result.accessToken);
      alert('Đăng nhập thành công!');
      this.router.navigate(["/"])
    }, error => {
      console.log(error.error)
    })
  }
  ngOnDestroy(): void {
    settings.displayLoading();
    this.subService ? this.subService.unsubscribe:''
  }
  logo = "assets/home/images/Logo.png";
}
