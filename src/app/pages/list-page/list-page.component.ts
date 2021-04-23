import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { first, map, tap } from "rxjs/operators";
import { IAdditive } from "src/app/interfaces/IAdditive";
import { AdditivesService } from "src/app/services/additives.service";
import { FirebaseService } from "src/app/services/firebase/firebase.service";

@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.scss"]
})
export class ListPageComponent implements OnInit {
  itemLocal: Observable<IAdditive[]>;
  max = 10;
  min = 0;

  selectedAdditive: IAdditive;

  dbList: IAdditive[];

  constructor(
    private additivesService: AdditivesService,
    private _firestore: FirebaseService
  ) {}

  ngOnInit() {
    this.itemLocal = this.additivesService.getLocalList();

    this._firestore.additivesList$
      .pipe(tap((response) => console.log("==>", response)))
      .subscribe((res) => (this.dbList = res));
  }

  async loadData($event) {
    this.max = this.max + 10;
    $event.target.complete();
  }

  filterByLevel($event) {
    const { detail: { value = null } = {} } = $event;

    this._firestore.additivesList$
      .pipe(tap((response) => console.log("==>", response)))
      .subscribe((res) => (this.dbList = res));

    if (value === null) {
      return;
    }

    this.dbList = this.dbList.filter((additive) => additive.level === value);
  }
}
