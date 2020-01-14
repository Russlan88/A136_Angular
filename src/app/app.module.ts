import { LandComponent } from './land/land.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComplexComponent } from './about-complex/about-complex.component';
import { AboutDeveloperComponent } from './about-developer/about-developer.component';
import { ByeConditionsComponent } from './bye-conditions/bye-conditions.component';
import { DocumentsComponent } from './documents/documents.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReadyDimComponent } from './ready-dim/ready-dim.component';
import { BuildingProcessComponent } from './building-process/building-process.component';
import { SelectFlatComponent } from './select-flat/select-flat.component';
import { FlatsComponent } from './flats/flats.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { SpmCoreModule } from 'spm-core';
import { environment } from '@environment/environment';
import { NewsListComponent } from './news-list/news-list.component';

export function getEnv() {
  return environment;
}
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    LandComponent,
    AboutComplexComponent,
    AboutDeveloperComponent,
    ByeConditionsComponent,
    DocumentsComponent,
    ContactsComponent,
    ReadyDimComponent,
    BuildingProcessComponent,
    SelectFlatComponent,
    FlatsComponent,
    GalleryComponent,
    NewsComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    SpmCoreModule.forRoot(getEnv())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
