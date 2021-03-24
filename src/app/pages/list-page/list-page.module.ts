import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListPageRoutingModule } from "./list-page-routing.module";
import { ListPageComponent } from "./list-page.component";
import { IonicModule } from "@ionic/angular";
import { ColorsPipe } from './pipes/colors.pipe';

@NgModule({
  declarations: [ListPageComponent, ColorsPipe],
  imports: [CommonModule, ListPageRoutingModule, IonicModule]
})
export class ListPageModule {}
