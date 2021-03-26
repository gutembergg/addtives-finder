import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IAdditive } from "src/app/interfaces/IAdditive";
import { AdditivesService } from "src/app/services/additives.service";

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

  constructor(private additivesService: AdditivesService) {}

  ngOnInit(): void {
    this.itemLocal = this.additivesService.getLocalList();
  }

  async loadData($event) {
    this.max = this.max + 10;
    $event.target.complete();
  }

  filterByLevel($event) {
    const { detail: { value = null } = {} } = $event;

    this.itemLocal = this.additivesService.getLocalList().pipe(
      map((items) => {
        if (value === null) {
          return items;
        }
        return items.filter((i) => i.level === value);
      })
    );
  }
}
