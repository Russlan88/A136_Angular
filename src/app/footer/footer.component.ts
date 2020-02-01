import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from "@angular/core";
import { ResourcesDataServicesService } from "@services/resources/resources-data-services.service";
import { ISiteVariables } from "@owntypes/site-variables/site.variables";
import { Observable } from "rxjs";
import { LangService } from "@services/lang/lang.service";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class FooterComponent implements OnInit {
  /**
   * this is id of page "footer"
   */
  readonly sitePageGroupId = 11;
  constructor(
    private _resource: ResourcesDataServicesService,
    private _langServ: LangService
  ) {}
  ngOnInit() {}
}
