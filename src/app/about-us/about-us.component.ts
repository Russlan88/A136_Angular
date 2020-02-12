import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LangService } from '@services/lang/lang.service';
import { ResourcesDataServicesService } from '@services/resources/resources-data-services.service';
import { GgroupService } from '@services/sitegroup/sitegroup.service';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ GgroupService ]
})
export class AboutUsComponent implements OnInit {
  readonly route = 'about-us';
  constructor(
    private _langServ: LangService,
    private _resource: ResourcesDataServicesService,
    private _siteGroup: GgroupService
  ) { }

  ngOnInit() {
    /****************************************************************************************************
    * subscribe to global change of language for reinitializing siteGroup (data for this particular page)
    ****************************************************************************************************/
    this._langServ
      .onChange()
      .pipe(
        mergeMap(lang => {
          return this._siteGroup.querySiteGroup(this.route, lang);
        })
      )
      .subscribe();
  }
  getRes(key: string): Observable<string> {
    return this._resource.getRes(key);
  }
  getSiteGroup(key: string): Observable<string> {
    return this._siteGroup.getGropRes(key);
  }

}
