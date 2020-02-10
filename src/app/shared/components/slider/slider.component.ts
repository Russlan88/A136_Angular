import * as Flickity from 'flickity';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { UUID } from 'angular2-uuid';
import { isPlatformBrowser } from '@angular/common';
import { LangService } from '@services/lang/lang.service';
import { ResourcesDataServicesService } from '@services/resources/resources-data-services.service';
import { GgroupService } from '@services/sitegroup/sitegroup.service';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ModelGalleryResource } from '@models/model.gallery.resource';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit, AfterViewInit {
  // @Input() images: string[];
  @Input() data: ModelGalleryResource[];
  @Input() keyText = '';
  @Input() keyDate = '';
  @Input() keyType = '';
  @Input() opt: any = {};
  @ViewChildren('container') public childList: QueryList<any>;
  flickerId = `carousel__${UUID.UUID()}`;
  isBrowser = isPlatformBrowser(this.platformId);
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private _resource: ResourcesDataServicesService
  ) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this._initFlickity();
  }
  private _initFlickity(): void {
    if (this.isBrowser) {
    const flkty = new Flickity(`.${this.flickerId}`, this.opt);
    const carouselStatus = this.childList.last.nativeElement.children[1];

    function updateStatus() {
        const slideNumber = flkty.selectedIndex + 1;
        carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
    }
    updateStatus();
    flkty.on('select', updateStatus);
      // flkty.on("change", flkty.reposition);
    }
  }
  getRes(key: string): Observable<string> {
    return this._resource.getRes(key);
  }
}
