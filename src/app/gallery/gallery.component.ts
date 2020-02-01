/** @format */

import { Component, OnInit } from '@angular/core';
import Flickity from 'flickity';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		// external js: flickity.pkgd.js

		var flkty = new Flickity('.carousel');
		var carouselStatus = document.querySelector('.carousel-status');

		function updateStatus() {
			var slideNumber = flkty.selectedIndex + 1;
			carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
		}
		updateStatus();

		flkty.on('select', updateStatus);
	}
}
