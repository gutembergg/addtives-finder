import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IAdditive } from "src/app/interfaces/IAdditive";
import { AdditivesService } from "src/app/services/additives.service";

@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.scss"]
})
export class ListPageComponent implements OnInit {
  items$: Observable<IAdditive[]>;

  constructor(private additivesService: AdditivesService) {}

  ngOnInit(): void {
    this.getAddtives();
  }

  getAddtives(): Observable<IAdditive[]> {
    return (this.items$ = this.additivesService.getAll());
  }
}
