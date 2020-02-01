import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { GgroupService } from "@services/sitegroup/sitegroup.service";
import { LangService } from "@services/lang/lang.service";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "app-building-process",
  templateUrl: "./building-process.component.html",
  styleUrls: ["./building-process.component.scss"],
  providers: [GgroupService]
})
export class BuildingProcessComponent implements OnInit {
  readonly route = "building-process";
  constructor(
    private _langServ: LangService,
    private _siteGroup: GgroupService
  ) {}

  ngOnInit() {
    /****************************************************************************************************
     * subscribe to global change of language for reinitializing siteGroup (data for this particular page)
     ****************************************************************************************************/
    this._langServ;
  }
}
