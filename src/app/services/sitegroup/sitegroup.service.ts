import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { ISiteVariables } from '@owntypes/site-variables/site.variables';
import { ModelSiteGroup, EnumLanguages, SitegroupService } from 'spm-core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GgroupService {

  constructor(
    @Inject('APP_CONFIG') private _appConfig: ISiteVariables,
    private _siteGroup: SitegroupService
  ) { }

  querySiteGroup(route: string, lang: EnumLanguages): Observable<ModelSiteGroup> {
    return this._siteGroup.querySiteGroup(route, lang, this._appConfig.id);
  }
  get siteGroup(): Observable<ModelSiteGroup> {
    return this._siteGroup.siteGroup;
  }
  getGropRes(key: string): Observable<string> {
    return this.siteGroup
      .pipe(
        map((sg: ModelSiteGroup) => {
          // find in getter
          let str = sg[key];
          // if nothing has been found in getter try find in resources array
          if (!str && Array.isArray(sg.resources)) {
            const findItem = sg.resources.find(r => r.code === key);
            if (findItem) {
              str = findItem.content;
            }
          }
          return str ? str : '';
        })
      );
  }
}
