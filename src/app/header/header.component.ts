import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	sityMap = 'Г. КИЕВ, УЛ. АНТОНОВИЧА, 136-138';
	showMap = ' ПОКАЗАТЬ НА КАРТЕ';
	phoneNumber = '(044) 290-70-76';
	linkToSecondSection = 'watch more';
	watchHouse = 'Изучить планировки';
	ddd = '09090';

	constructor() {}

	ngOnInit() {}
}
