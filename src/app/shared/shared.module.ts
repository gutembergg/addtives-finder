import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PIPES } from "./pipes";
import { ColorsPipe } from "./pipes/colors/colors.pipe";
import { HeaderComponent } from "./components/header/header.component";
import { IonicModule } from "@ionic/angular";
import { COMPONENTS } from "./components";
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [...PIPES, ...COMPONENTS, ColorsPipe, HeaderComponent, PopupComponent],
  imports: [CommonModule, IonicModule],
  exports: [...PIPES, ...COMPONENTS]
})
export class SharedModule {}
