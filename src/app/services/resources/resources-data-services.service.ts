import { Injectable, Inject } from "@angular/core";
import { ISiteVariables } from "@owntypes/site-variables/site.variables";
import { Observable, ReplaySubject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ResourcesDataServicesService {
  constructor(@Inject("APP_CONFIG") private appConfig: ISiteVariables) {}
}
