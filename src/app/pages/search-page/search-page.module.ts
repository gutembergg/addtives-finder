import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SearchPageRoutingModule } from "./search-page-routing.module";
import { SearchPageComponent } from "./search-page.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [SearchPageComponent],
  imports: [CommonModule, SearchPageRoutingModule, IonicModule]
})
export class SearchPageModule {}
