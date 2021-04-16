import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";
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
  constructor(private _http: HttpClient, private _alert: AlertController) {}

  getAddtiveInfo(id: string): Observable<any> {
    return this._http.get(
      `https://fr.wikipedia.org/api/rest_v1/page/summary/E${id}`
    );
  }

  getAdditiveById(id: string): Observable<IAdditive> {
    return this._http
      .get(routes.listLocal())
      .pipe(
        map((response: { additives: IAdditive[] }) =>
          response.additives.find((item) => item.id === id)
        )
      );
  }

  getLocalList(): Observable<IAdditive[]> {
    return this._http
      .get(routes.listLocal())
      .pipe(map((response: { additives: IAdditive[] }) => response.additives));
  }
}
