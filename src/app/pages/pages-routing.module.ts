import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "search",
        loadChildren: () =>
          import("./search-page/search-page.module").then(
            (m) => m.SearchPageModule
          )
      },
      {
        path: "list",
        loadChildren: () =>
          import("./list-page/list-page.module").then((m) => m.ListPageModule)
      },
      {
        path: "detail",
        loadChildren: () =>
          import("./detail/detail.module").then((m) => m.DetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
