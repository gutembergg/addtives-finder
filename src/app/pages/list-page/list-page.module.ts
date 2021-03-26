import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListPageRoutingModule } from "./list-page-routing.module";
import { ListPageComponent } from "./list-page.component";
import { IonicModule } from "@ionic/angular";
import { ColorsPipe } from "./pipes/colors.pipe";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [ListPageComponent, ColorsPipe],
  imports: [CommonModule, ListPageRoutingModule, IonicModule, SharedModule]
})
export class ListPageModule {}
