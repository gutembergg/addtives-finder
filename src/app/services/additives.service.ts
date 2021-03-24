import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IAdditive } from "../interfaces/IAdditive";

const baseUrl = environment.baseUrl;

const routes = {
  list: () => `${baseUrl}/additives`,
  detail: (id: string) => `${baseUrl}/additives/${id}`
};

@Injectable({
  providedIn: "root"
})
export class AdditivesService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<IAdditive[]> {
    return this._http.get<IAdditive[]>(routes.list());
  }

  getById(id: string): Observable<IAdditive> {
    return this._http.get<IAdditive>(routes.detail(id));
  }
}
