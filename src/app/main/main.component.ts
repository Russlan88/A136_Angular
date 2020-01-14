import { MainPageDataService } from '@services/main-page-data/main-page-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  linkToSecondSection = 'watch more';
  watchHouse = 'Изучить планировки';
  constructor(private _mainDataService: MainPageDataService) {}

  ngOnInit() {}
}
