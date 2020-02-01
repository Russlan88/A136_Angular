import { Observable } from "rxjs";
import { Injectable, Inject } from "@angular/core";
import { ISiteVariables } from "@owntypes/site-variables/site.variables";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GgroupService {
  constructor(@Inject("APP_CONFIG") private _appConfig: ISiteVariables) {}
}
