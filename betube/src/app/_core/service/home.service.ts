import { SignUpComponent } from './../../modules/home/account/sign-up/sign-up.component';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { configs } from "../config";
@Injectable({
  providedIn: "root"
})
export class HomeService {
  API_URL = {
    getListFilms: configs.domain + configs.apiRoutes.home.getListFilms + configs.groupID,
    getListSystemTheaters: configs.domain + configs.apiRoutes.home.getListSystemTheaters,
    getListTheaters: configs.domain + configs.apiRoutes.home.getListTheaters,
    getListTheatersShowtimes: configs.domain + configs.apiRoutes.home.getListTheatersShowtimes + configs.groupID,
    signIn: configs.domain + configs.apiRoutes.home.postSignIn,
    signUp: configs.domain + configs.apiRoutes.home.postSignUp,
  };

  constructor(private _http: HttpClient) {}

  public getListFilms(): Observable<any[]> {
    let result: any = this._http.get(this.API_URL.getListFilms);
    return result;
  }

  public getListSystemTheaters(): Observable<any[]> {
    let result: any = this._http.get(this.API_URL.getListSystemTheaters);
    return result;
  }

  public getListTheaters(systemTheaterID: string): Observable<any[]> {
    let result: any = this._http.get(this.API_URL.getListTheaters + systemTheaterID);
    return result;
  }

  public getListTheatersShowtimes(systemTheaterID: string): Observable<any> {
    let result: any = this._http.get(this.API_URL.getListTheatersShowtimes + configs.params.systemTheaterID + systemTheaterID);
    return result;
  }
  public postSignUp(): Observable<any[]> {
    let result: any = this._http.get(this.API_URL.getListFilms);
    return result;
  }
  public signIn(userName: string, password: string) : Observable<any> {
    //Content-Type là do phía back-end định nghĩa, bắt buộc phải khai báo đúng
    let header = new HttpHeaders({'Content-Type':  'application/json'});
    //Khi sử dụng post thì phải gửi kèm theo cục body, ở đây body là {taiKhoan: userName, matKhau: password} 
    //và kèm theo header để server có thể đọc hiểu được request 
    let result = this._http.post(this.API_URL.signIn,{taiKhoan: userName, matKhau: password},{headers:header,responseType:'json'});
    return result;
  }
  public signUp(): Observable<any[]>{
    let result: any = this._http.get(this.API_URL.signUp);
    return result;
  }
}
