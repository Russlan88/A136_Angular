import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-description',
  templateUrl: './layout-description.component.html',
  styleUrls: ['./layout-description.component.scss']
})
export class LayoutDescriptionComponent implements OnInit {
  _langServ: any;
  _siteGroup: any;

  constructor() { }

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
  route(route: any, lang: any) {
    throw new Error('Method not implemented.');
  }
  getSiteGroup(key: string): Observable<string> {
    return this._siteGroup.getGropRes(key);
  }

}
