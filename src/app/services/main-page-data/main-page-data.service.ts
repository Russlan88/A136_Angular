import { Injectable } from '@angular/core';
import { FloorsService } from 'spm-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainPageDataService {

  constructor(
    private _floorsService: FloorsService
  ) { }
}
