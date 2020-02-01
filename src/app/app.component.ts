import { LangService } from "@services/lang/lang.service";
import { ResourcesDataServicesService } from "@services/resources/resources-data-services.service";
import { Component, OnInit, Inject } from "@angular/core";
import { ISiteVariables } from "@owntypes/site-variables/site.variables";
import { mergeMap } from "rxjs/operators";

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
  ngOnInit(): void {}
}
