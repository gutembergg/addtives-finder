import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DetailRoutingModule } from "./detail-routing.module";
import { DetailComponent } from "./detail.component";
import { IonicModule } from "@ionic/angular";
import { ColorsPipe } from "src/app/pipes/colors/colors.pipe";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [DetailComponent, ColorsPipe],
  imports: [CommonModule, DetailRoutingModule, IonicModule, SharedModule]
})
export class DetailModule {}
