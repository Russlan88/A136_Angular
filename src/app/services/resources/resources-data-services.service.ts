import { Injectable, Inject } from '@angular/core';
import { ISiteVariables } from '@owntypes/site-variables/site.variables';
import { ResourcesService, ModelResource, EnumLanguages, EnumResourceType } from 'spm-core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResourcesDataServicesService {

  private _resources$ = new ReplaySubject<ReadonlyArray<ModelResource>>(1);
  constructor(
    @Inject('APP_CONFIG') private appConfig: ISiteVariables,
    private _resources: ResourcesService
  ) { }

  queryResources(sitePageGroupId: number): Observable<ReadonlyArray<ModelResource>> {
    return this._resources.queryResources({
      siteId: this.appConfig.id,
      lang: EnumLanguages.RUSSIAN,
      sitePageGroupId,
      type: EnumResourceType.SITE
    })
      .pipe(
        map((models: ReadonlyArray<ModelResource>) => {
          this._resources$.next(models);
          return models;
        })
      );
  }
  getRes(key: string): Observable<string> {
    return this._resources$
      .pipe(
        map((models: ReadonlyArray<ModelResource>) => {
          const item = models.find(c => c.code === key);
          if (item) {
            return item.content;
          }
          return '';
        })
      );
  }
}
