import * as Flickity from 'flickity';
import {
  Component, OnInit, Input, ChangeDetectionStrategy,
  ViewChildren, QueryList, AfterViewInit, Inject, PLATFORM_ID
} from '@angular/core';
import { UUID } from 'angular2-uuid';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit, AfterViewInit {

  @Input() images: string[];
  @Input() opt: any = {};
  @ViewChildren('container') public childList: QueryList<any>;
  flickerId = `carousel__${UUID.UUID()}`;
  isBrowser = isPlatformBrowser(this.platformId);
  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit() { }
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
    }
  }
}
