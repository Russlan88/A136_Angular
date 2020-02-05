import { Component, OnInit } from '@angular/core';
import noUiSlider from 'nouislider';

@Component({
  selector: 'app-apartments-filter',
  templateUrl: './apartments-filter.component.html',
  styleUrls: ['./apartments-filter.component.scss']
})
export class ApartmentsFilterComponent implements OnInit {
  constructor() { }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    const slider2 = document.getElementById('slider');

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
   }
}
