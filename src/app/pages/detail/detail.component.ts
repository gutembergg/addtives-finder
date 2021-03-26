import { Component, OnInit } from "@angular/core";
import { AdditivesService } from "src/app/services/additives.service";
import { first } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { IAdditive } from "src/app/interfaces/IAdditive";

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

  constructor(
    private addtiveService: AdditivesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;
    this.getLocalList(id);
    this.getAddtiveInfo(id);
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
