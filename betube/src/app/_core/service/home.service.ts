import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
}
