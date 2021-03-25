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

  constructor(private additivesService: AdditivesService) {}

  ngOnInit(): void {
    this.getAddtives();
    this.getLocalList();
  }

  getAddtives(): Observable<IAdditive[]> {
    return (this.items$ = this.additivesService.getAll());
  }

  loadData($event) {
    this.max = this.max + 10;
    $event.target.complete();
    console.log("event", this.min, this.max);
  }

  async getLocalList() {
    this.itemLocal = await this.additivesService
      .getLocalList()
      .pipe(first())
      .toPromise();
  }
}
