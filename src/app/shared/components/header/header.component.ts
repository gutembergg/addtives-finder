import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PopoverController } from "@ionic/angular";
import { PopupComponent } from "../popup/popup.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor(
    private _router: Router,
    public popoverController: PopoverController
  ) {}

  ngOnInit(): void {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopupComponent,
      cssClass: "my-custom-class",
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  goBack(): void {
    this._router.navigate(["pages/list"]);
  }
}
