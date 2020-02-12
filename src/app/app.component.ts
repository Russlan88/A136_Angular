<<<<<<< HEAD
=======
import { EnumLanguages } from "spm-core";
>>>>>>> 0ea276bc4e76f805dc6e1d3019245ac6bb456dee
import { LangService } from "@services/lang/lang.service";
import { ResourcesDataServicesService } from "@services/resources/resources-data-services.service";
import { Component, OnInit, Inject } from "@angular/core";
import { ISiteVariables } from "@owntypes/site-variables/site.variables";
import { mergeMap } from "rxjs/operators";
<<<<<<< HEAD
=======
import { AotSummaryResolver } from "@angular/compiler";
>>>>>>> 0ea276bc4e76f805dc6e1d3019245ac6bb456dee

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "a136";
  constructor(
    private _resources: ResourcesDataServicesService,
    private _lang: LangService,
    @Inject("APP_CONFIG") private appConfig: ISiteVariables
  ) {}
<<<<<<< HEAD
  ngOnInit(): void {}
=======
  ngOnInit(): void {
    /****************************************************************************************
     * listen change language and reinit global resources
     ****************************************************************************************/
    this._lang
      .onChange()
      .pipe(
        mergeMap((lang: EnumLanguages) => {
          return this._resources.queryResources();
        })
      )
      .subscribe();
  }
>>>>>>> 0ea276bc4e76f805dc6e1d3019245ac6bb456dee
}
