import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { configs } from "../config";
@Injectable({
  providedIn: "root"
})
export class HomeService {
  API_URL = {
    getListFilms:
      configs.domain + configs.apiRoutes.home.getListFilms + configs.groupID
  };

  constructor(private _http: HttpClient) {}

  public getListFilms(): Observable<any[]> {
    let result: any = this._http.get(this.API_URL.getListFilms);
    return result;
  }
}
