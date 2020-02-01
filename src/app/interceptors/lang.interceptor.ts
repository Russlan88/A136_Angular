import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler
} from "@angular/common/http";
import { LangService } from "@services/lang/lang.service";
import { Observable } from "rxjs";

/**
 * add current language to headers
 */
@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(private _langService: LangService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let cloneReq = null;
    cloneReq = req.clone({});
    return next.handle(cloneReq);
  }
}
