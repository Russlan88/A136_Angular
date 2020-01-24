import { Observable, forkJoin } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Inject, ChangeDetectorRef } from '@angular/core';
import { ResourcesDataServicesService } from '@services/resources/resources-data-services.service';
import { ModelResource, ModelTopMenuItem, MenuService, EnumLanguages } from 'spm-core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { pluck, mergeMap } from 'rxjs/operators';
import { ISiteVariables } from '@owntypes/site-variables/site.variables';
import { LangService } from '@services/lang/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  /**
   * this is id of page "header"
   */
  defualultStartUpLang = this._appConfig.defLang;
  enumLang = EnumLanguages;
  form: FormGroup;
  menu: ReadonlyArray<ModelTopMenuItem> = [];
  mainMenucode = 'mainMenu';
  phoneNumber = '(044) 290-70-76';
  readonly sitePageGroupId = 12;
  resources: ReadonlyArray<ModelResource> = [];

  constructor(
    @Inject('APP_CONFIG') private _appConfig: ISiteVariables,
    private _cd: ChangeDetectorRef,
    private _fb: FormBuilder,
    private _langServ: LangService,
    private _menuServ: MenuService,
    private _resource: ResourcesDataServicesService,
  ) { }

  ngOnInit() {
    this.form = this._fb.group({
      lang: [this.defualultStartUpLang]
    });
    /*****************************************************************************************************
     * set default lang for start application
     ****************************************************************************************************/
    this._langServ.setLang(this.defualultStartUpLang);
    /****************************************************************************************************
     * listen radio for changing current language
     ****************************************************************************************************/
    this.form.valueChanges
      .pipe(pluck('lang'))
      .subscribe((lang: EnumLanguages) => {
        this._langServ.setLang(lang);
      });
    /****************************************************************************************************
     * subscribe to global change language for reinit resources
     ****************************************************************************************************/
    this._langServ.onChange()
      .pipe(
        mergeMap((_lang) => {
          return forkJoin([
            this._menuServ.queryMenu(this._appConfig.id, this.mainMenucode)
          ]);
        })
      )
      .subscribe(([ menu]: [ReadonlyArray<ModelTopMenuItem>]) => {
        console.log('------------------------');
        this.menu = menu;
        this._cd.detectChanges();
      });
  }

  getRes(key: string): Observable<string> {
    return this._resource.getRes(key);
  }
  getRouter(item: ModelTopMenuItem): string {
      return `/${item.route}`;
  }
}
