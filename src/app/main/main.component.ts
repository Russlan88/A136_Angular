import { ModelGalleryResource } from './../models/model.gallery.resource';
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
	imagesForSomeSliderOne: ModelGalleryResource[];
	squareSlider: ModelGalleryResource[];

	optOne = {
		draggable: true,
		cellAlign: 'left',
		prevNextButtons: false,
		pageDots: false
	};
	imageSource: string[];
	optTwo = {
		draggable: true,
		groupCells: 2
	};
	imageSquere: string[];
	optionSquere = {
		draggable: true,
		pageDots: false
	};

	constructor(
		private _langServ: LangService,
		private _resource: ResourcesDataServicesService,
		private _siteGroup: GgroupService,
		private _title: Title
	) {}

	ngOnInit() {
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
		this.squareSlider = [
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg'
			}),
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg'
			}),
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg'
			}),
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg'
			}),
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg'
			}),
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg'
			}),
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg'
			})
		];

		this.imagesForSomeSliderOne = [
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
				text:
					'But I must explain to you how all this mistaken idea of denouncing pleasure',
				date: '10.02.2020',
				type: 'New'
			}),
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
				text: 'Stay Trendy and In Time – Early Booking Offer ',
				date: '10.02.2020',
				type: 'New'
			}),
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
				text: 'Stay Trendy and In Time – Early Booking Offer ',
				date: '10.02.2020',
				type: 'New'
			}),
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
				text:
					'But I must explain to you how all this mistaken idea of denouncing pleasure',
				date: '10.02.2020',
				type: 'New'
			}),
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
				text: 'Stay Trendy and In Time – Early Booking Offer ',
				date: '10.02.2020',
				type: 'New'
			}),
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
				text: 'Stay Trendy and In Time – Early Booking Offer ',
				date: '10.02.2020',
				type: 'New'
			}),
			new ModelGalleryResource({
				image:
					'assets/images/home-page/slider-planning/A136__apartment-check.jpg',
				text:
					'But I must explain to you how all this mistaken idea of denouncing pleasure',
				date: '10.02.2020',
				type: 'New'
			})
		];
	}
	getRes(key: string): Observable<string> {
		return this._resource.getRes(key);
	}
	getSiteGroup(key: string): Observable<string> {
		return this._siteGroup.getGropRes(key);
	}
}
