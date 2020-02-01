import { GgroupService } from "./../services/sitegroup/sitegroup.service";
import { Observable, forkJoin } from "rxjs";
import {
  Component,
  OnInit,
  Inject,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from "@angular/core";
import { ResourcesDataServicesService } from "@services/resources/resources-data-services.service";
import { LangService } from "@services/lang/lang.service";
import { mergeMap } from "rxjs/operators";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GgroupService]
  /*encapsulation: ViewEncapsulation.None*/
})
export class MainComponent implements OnInit {
  readonly route = "main";
  constructor(
    private _langServ: LangService,
    private _resource: ResourcesDataServicesService,
    private _siteGroup: GgroupService,
    private _title: Title
  ) {}

  ngOnInit() {
    /****************************************************************************************************
     * subscribe to global change of language for reinitializing siteGroup (data for this particular page)
     ****************************************************************************************************/
    this._langServ;
  }
}
