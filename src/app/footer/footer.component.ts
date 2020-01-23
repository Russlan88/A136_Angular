import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import { ResourcesDataServicesService } from '@services/resources/resources-data-services.service';
import { ISiteVariables } from '@owntypes/site-variables/site.variables';
import { Observable } from 'rxjs';
import { LangService } from '@services/lang/lang.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ResourcesDataServicesService]
})
export class FooterComponent implements OnInit {
  /**
   * this is id of page "footer"
   */
  readonly sitePageGroupId = 11;
  constructor(
    private _resource: ResourcesDataServicesService,
    private _langServ: LangService
  ) { }

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
