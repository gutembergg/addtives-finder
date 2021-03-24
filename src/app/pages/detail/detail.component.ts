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
  addtiveInfo: string;

  constructor(
    private addtiveService: AdditivesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;
    this.getAdditiveDetail(id);
  }

  async getAdditiveDetail(id: string) {
    this.additive$ = await this.addtiveService
      .getById(id)
      .pipe(first())
      .toPromise();

    this.addtiveInfo = this.additive$.info;
  }

  goBack(): void {
    this._router.navigate(["pages/list"]);
  }
}
