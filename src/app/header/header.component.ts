import { Observable, forkJoin } from "rxjs";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  ChangeDetectorRef
} from "@angular/core";
import { ResourcesDataServicesService } from "@services/resources/resources-data-services.service";

import { FormGroup, FormBuilder } from "@angular/forms";
import { pluck, mergeMap, filter } from "rxjs/operators";
import { ISiteVariables } from "@owntypes/site-variables/site.variables";
import { LangService } from "@services/lang/lang.service";

/* test menu */

import { Renderer, HostListener } from "@angular/core";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common";
import { Params, Router, ActivatedRoute, NavigationEnd } from "@angular/router";

/* end test menu */

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  currentUrl: string;
  /**
   * this is id of page "header"
   */
  form: FormGroup;
  mainMenucode = "mainMenu";
  phoneNumber = "(044) 290-70-76";
  readonly sitePageGroupId = 12;

  constructor(
    @Inject("APP_CONFIG") private _appConfig: ISiteVariables,
    private _cd: ChangeDetectorRef,
    private _fb: FormBuilder,
    private _langServ: LangService,
    private _resource: ResourcesDataServicesService,
    private _router: Router,

    /* test */
    // tslint:disable-next-line: deprecation
    private renderer: Renderer,
    public location: Location,
    @Inject(DOCUMENT) document
    /*end test */
  ) {}

  /* test */
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      const element = document.querySelector("#navbar-top");
      if (element) {
        element.classList.remove("navbar-transparent");
        element.classList.add("sticky-header");
      }
    } else {
      const element = document.querySelector("#navbar-top");
      if (element) {
        element.classList.add("navbar-transparent");
        element.classList.remove("sticky-header");
      }
    }
  }

  /* end test */

  ngOnInit() {
    this.form = this._fb.group({});
    /*****************************************************************************************************
     * set default lang for start application
     ****************************************************************************************************/
    /****************************************************************************************************
     * listen radio for changing current language
     ****************************************************************************************************/

    /****************************************************************************************************
     * subscribe to global change language for reinit resources
     ****************************************************************************************************/

    /****************************************************************************************************
     * listen current router
     ****************************************************************************************************/
    this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentUrl = this._router.routerState.snapshot.url;
      });
    // tslint:disable-next-line: deprecation
    this.onWindowScroll(event);
  }
}
