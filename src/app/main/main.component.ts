import { GgroupService } from './../services/sitegroup/sitegroup.service';
import { EnumLanguages, SitegroupService, ModelSiteGroup } from 'spm-core';
import { Observable, forkJoin } from 'rxjs';
import {
	Component,
	OnInit,
	Inject,
	ChangeDetectionStrategy,
	ViewEncapsulation
} from '@angular/core';
import { ResourcesDataServicesService } from '@services/resources/resources-data-services.service';
import { LangService } from '@services/lang/lang.service';
import { mergeMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
// import Flickity from 'flickity';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [GgroupService]
	/*encapsulation: ViewEncapsulation.None*/
})
export class MainComponent implements OnInit {
	readonly route = 'main';
	imagesForSomeSliderOne: string[];
	optOne = {
		draggable: true
	};
	imagesForSomeSliderTwo: string[];
	constructor(
		private _langServ: LangService,
		private _resource: ResourcesDataServicesService,
		private _siteGroup: GgroupService,
		private _title: Title
	) {}

	ngOnInit() {
		/****************************************************************************************************
		 * INITIALIZE SLIDER
		 ****************************************************************************************************/

		// tslint:disable-next-line: prefer-const
		// let flkty = new Flickity('.carousel-r');
		// const carouselStatus = document.querySelector('.carousel-status');

		// function updateStatus() {
		//   const slideNumber = flkty.selectedIndex + 1;
		//   carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
		// }
		// updateStatus();

		// flkty.on('select', updateStatus);
		/****************************************************************************************************
		 * subscribe to global change of language for reinitializing siteGroup (data for this particular page)
		 ****************************************************************************************************/
		this._langServ
			.onChange()
			.pipe(
				mergeMap((lang) => {
					return this._siteGroup.querySiteGroup(this.route, lang);
				})
			)
			.subscribe();
		/********************************************************************************************
		 * init two mock array for passing them in <app-slider>
		 *********************************************************************************************/
		this.imagesForSomeSliderOne = [
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg'
		];

		this.imagesForSomeSliderTwo = [
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
			'assets/images/home-page/slider-planning/A136__apartment-check.jpg'
		];
	}
	getRes(key: string): Observable<string> {
		return this._resource.getRes(key);
	}
	getSiteGroup(key: string): Observable<string> {
		return this._siteGroup.getGropRes(key);
	}
}
