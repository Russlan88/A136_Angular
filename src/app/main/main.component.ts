import { Observable } from 'rxjs';
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { ResourcesDataServicesService } from '@services/resources/resources-data-services.service';
import { LangService } from '@services/lang/lang.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ ResourcesDataServicesService ]
})
export class MainComponent implements OnInit {
  /**
   * this is id of page "main"
   */
  readonly sitePageGroupId = 11;
  linkToSecondSection = 'watch more';
  constructor(
    private _resource: ResourcesDataServicesService,
    private _langServ: LangService
  ) {}

  ngOnInit() {
    /****************************************************************************************************
     * subscribe to global change language for reinit resources
     ****************************************************************************************************/
    this._langServ.onChange()
    .pipe(
      mergeMap((lang) => {
        return this._resource.queryResources(this.sitePageGroupId);
      })
    )
    .subscribe();
  }
  getRes(key: string): Observable<string> {
    return this._resource.getRes(key);
  }
}
