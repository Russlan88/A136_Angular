import { Component, OnInit, Renderer } from "@angular/core";
import { mergeMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { LangService } from "@services/lang/lang.service";
import { GgroupService } from "@services/sitegroup/sitegroup.service";

@Component({
  selector: "app-purchase-terms",
  templateUrl: "./purchase-terms.component.html",
  styleUrls: ["./purchase-terms.component.scss"]
})
export class PurchaseTermsComponent implements OnInit {
  readonly route = "purchase-terms";
  constructor(
    private _langServ: LangService,
    private _siteGroup: GgroupService
  ) {}

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
