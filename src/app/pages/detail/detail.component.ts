import { Component, OnInit } from "@angular/core";
import { AdditivesService } from "src/app/services/additives.service";
import { first, tap } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { IAdditive } from "src/app/interfaces/IAdditive";
import { FirebaseService } from "src/app/services/firebase/firebase.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  additive$: IAdditive;
  info: any;
  itemLocal: any;

  selctedAdditive: IAdditive;
  extractAdditive: string;

  additivesDB: Observable<any>;

  constructor(
    private addtiveService: AdditivesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _firstore: FirebaseService
  ) {}

  ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;
    this.getLocalList(id);
    this.getAddtiveInfo(id);
    this._firstore.additivesList$
      .pipe(tap((response) => console.log("detail: ", response)))
      .subscribe((res: any) => (this.additivesDB = res));
  }

  addFavorite(id: string) {
    this._firstore.addFavorite(id);
  }

  async getLocalList(id: string) {
    this.itemLocal = await this.addtiveService
      .getLocalList()
      .pipe(first())
      .toPromise();

    const result = this.itemLocal.filter((item) => item.id === id);

    this.selctedAdditive = result[0];
  }

  async getAddtiveInfo(id: string) {
    this.info = await this.addtiveService
      .getAddtiveInfo(id)
      .pipe(first())
      .toPromise();
    this.extractAdditive = this.info.extract_html;
  }

  goBack(): void {
    this._router.navigate(["pages/list"]);
  }
}
