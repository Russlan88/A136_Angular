import { NewsComponent } from "./news/news.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { FlatsComponent } from "./flats/flats.component";
import { SelectFlatComponent } from "./select-flat/select-flat.component";
import { BuildingProcessComponent } from "./building-process/building-process.component";
import { ReadyDimComponent } from "./ready-dim/ready-dim.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { ByeConditionsComponent } from "./bye-conditions/bye-conditions.component";
import { DocumentsComponent } from "./documents/documents.component";
import { AboutDeveloperComponent } from "./about-developer/about-developer.component";
import { AboutComplexComponent } from "./about-complex/about-complex.component";
import { MainComponent } from "./main/main.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewsListComponent } from "./news-list/news-list.component";
import { DevelopmentTechnologyComponent } from "./development-technology/development-technology.component";
import { PurchaseTermsComponent } from "./purchase-terms/purchase-terms.component";
import { BuildingProcessSeptemberComponent } from "./building-process-september/building-process-september.component";
import { AboutUsComponent } from "./about-us/about-us.component";

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "about-complex", component: AboutComplexComponent },
  { path: "about-developer", component: AboutDeveloperComponent },
  { path: "bye-conditions", component: ByeConditionsComponent },
  { path: "documents", component: DocumentsComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "ready-dim", component: ReadyDimComponent },
  { path: "building_process", component: BuildingProcessComponent },
  { path: "select-flat", component: SelectFlatComponent },
  { path: "flats", component: FlatsComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "news-list", component: NewsListComponent },
  { path: "news/:id", component: NewsComponent },
  { path: "development-technology", component: DevelopmentTechnologyComponent },
  { path: "purchase-terms", component: PurchaseTermsComponent },
  {
    path: "building-process-september",
    component: BuildingProcessSeptemberComponent
  },
  { path: "about-us", component: AboutUsComponent },
  {
    path: "",
    redirectTo: "/main",
    pathMatch: "full"
  },
  { path: "**", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
