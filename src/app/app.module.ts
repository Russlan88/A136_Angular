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
import { TabsModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpmCoreModule, EnumLanguages } from 'spm-core';
import { environment } from '@environment/environment';
import { NewsListComponent } from './news-list/news-list.component';
import { DevelopmentTechnologyComponent } from './development-technology/development-technology.component';
import { ISiteVariables } from '@owntypes/site-variables/site.variables';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LanguageInterceptor } from './interceptors/lang.interceptor';
import { PurchaseTermsComponent } from './purchase-terms/purchase-terms.component';
import { ApartmentsFilterComponent } from './apartments-filter/apartments-filter.component';
import { BuildingProcessSeptemberComponent } from './building-process-september/building-process-september.component';
import { SharedModule } from './shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';

export const SITE_VARIABLES: ISiteVariables = {
  /**
   * this siteId
   */
  id: 18,
  /**
   * language applying at stary up application
   */
  defLang: EnumLanguages.UKRAINIAN
};

export function getEnv(): any {
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
    NewsListComponent,
    DevelopmentTechnologyComponent,
    PurchaseTermsComponent,
    ApartmentsFilterComponent,
    BuildingProcessSeptemberComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    TabsModule.forRoot(),
    FormsModule,
    SpmCoreModule.forRoot(getEnv()),
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    SharedModule
  ],
  providers: [
    { provide: 'APP_CONFIG', useValue: SITE_VARIABLES },
    { provide: HTTP_INTERCEPTORS, useClass: LanguageInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
