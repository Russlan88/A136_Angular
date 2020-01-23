import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EnumLanguages } from 'spm-core';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  private _currentLang$ = new BehaviorSubject<EnumLanguages>(null);
  constructor() { }

  setLang(lang: EnumLanguages): void {
    this._currentLang$.next(lang);
  }
  onChange(): Observable<EnumLanguages> {
    return this._currentLang$
    .pipe(
      filter(l => !!l)
    );
  }
  getLang(): EnumLanguages {
    return this._currentLang$.getValue();
  }
}
