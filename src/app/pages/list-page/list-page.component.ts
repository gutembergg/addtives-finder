import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";
import { IAdditive } from "src/app/interfaces/IAdditive";
import { AdditivesService } from "src/app/services/additives.service";

@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.scss"]
})
export class ListPageComponent implements OnInit {
  items$: Observable<IAdditive[]>;
  itemLocal: any;
  min = 0;
  max = 10;

  selectedAdditive: IAdditive;

  constructor(private additivesService: AdditivesService) {}

  ngOnInit(): void {
    this.getLocalList();
  }

  loadData($event) {
    this.max = this.max + 10;
    $event.target.complete();
  }

  async getLocalList() {
    this.itemLocal = await this.additivesService
      .getLocalList()
      .pipe(first())
      .toPromise();
  }

  getAdditiveByLevel(level: string) {
    const list = this.itemLocal;
    let result: string[] = [];

    switch (true) {
      case level === "0":
        result = list.filter((item) => item.level === level);
        break;
      case level === "1":
        result = list.filter((item) => item.level === level);
        break;
      case level === "2":
        result = list.filter(
          (item) => item.level === level && item.level === "3"
        );
        break;
      case level === "3":
        result = list.filter((item) => item.level === level);
        break;
      default:
        result = this.itemLocal;
    }
    return (this.itemLocal = result);
  }
}
