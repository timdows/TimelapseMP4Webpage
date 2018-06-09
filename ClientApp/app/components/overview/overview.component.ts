import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
	public mp4Details: MP4Details[];
	isOpen: boolean = false;

	constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
		http.get(baseUrl + 'MP4/GetList').subscribe(result => {
			this.mp4Details = result.json() as MP4Details[];
		}, error => console.error(error));
	}

	openMP4(mp4Detail: MP4Details) {
		this.isOpen = true;
	}
}

interface MP4Details {
	name: string;
	date: Date;
}
