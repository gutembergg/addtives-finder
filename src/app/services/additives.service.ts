import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { IAdditive } from "../interfaces/IAdditive";

const localUrl = environment.localUrl;

const routes = {
  list: () => `${localUrl}/`,
  detail: (id: string) => `${localUrl}/${id}`,
  listLocal: () => `${localUrl}`
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

  getAddtiveInfo(id: string): Observable<any> {
    return this._http.get(
      `https://fr.wikipedia.org/api/rest_v1/page/summary/E${id}`
    );
  }

  getLocalList(): Observable<any> {
    return this._http
      .get<any>(routes.listLocal())
      .pipe(map((data: any) => data.additives));
  }
}
