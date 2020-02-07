import { Component, OnInit } from '@angular/core';
import { LangService } from '@services/lang/lang.service';
import { GgroupService } from '@services/sitegroup/sitegroup.service';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-flat',
  templateUrl: './select-flat.component.html',
  styleUrls: ['./select-flat.component.scss']
})
export class SelectFlatComponent implements OnInit {
  readonly route = 'select-flat';
  constructor(
    private _langServ: LangService,
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

  getSiteGroup(key: string): Observable<string> {
    return this._siteGroup.getGropRes(key);
  }

}
